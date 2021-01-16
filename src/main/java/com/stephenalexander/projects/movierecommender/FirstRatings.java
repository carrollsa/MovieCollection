package com.stephenalexander.projects.movierecommender;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FirstRatings {
    Map<String, ArrayList<String>> raterMap;

    public List<Movie> loadMovies(String filename) {
        List<Movie> movies = new ArrayList<>();
        CSVParser parser = getCSVParser(filename);
        for (CSVRecord record : parser) {
            String id = record.get("id");
            String title = record.get("title");
            String year = record.get("year");
            String country = record.get("country");
            String genre = record.get("genre");
            String director = record.get("director");
            int minutes = Integer.parseInt(record.get("minutes"));
            String poster = record.get("poster");
            Movie movie = new Movie(id, title, year, genre, director, country, poster, minutes);
            movies.add(movie);
        }
        return movies;
    }

    private CSVParser getCSVParser(String filename) {
        final URL resource = FirstRatings.class.getClassLoader().getResource("data/" + filename);
        if (resource == null) {
            throw new RuntimeException("File not found: " + filename);
        }
        try {
            URI resourceURI = resource.toURI();
            File file = new File(resourceURI);
            Reader reader = new BufferedReader(new FileReader(file));
            return CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(reader);
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public ArrayList<EfficientRater> loadRaters(String filename) {
        ArrayList<EfficientRater> raters = new ArrayList<EfficientRater>();
        raterMap = new HashMap<>();
        CSVParser parser = getCSVParser(filename);
        for (CSVRecord record : parser) {
            String rID = record.get("rater_id");
            String mID = record.get("movie_id");
            String rating = record.get("rating");
            EfficientRater rater = new EfficientRater(rID);
            // rater.addRating(mID, Double.parseDouble(rating));
            // raters.add(rater);

            if (raterMap.containsKey(rID)) {
                ArrayList<String> ratings = raterMap.get(rID);
                String mAndR = mID + "-" + rating;
                ratings.add(mAndR);
                raterMap.put(rID, ratings);
            }
            if (!raterMap.containsKey(rID)) {
                ArrayList<String> ratings = new ArrayList<String>();
                String mAndR = mID + "-" + rating;
                ratings.add(mAndR);
                raterMap.put(rID, ratings);
            }
        }
        for (String r : raterMap.keySet()) {
            ArrayList<String> ratings = raterMap.get(r);
            EfficientRater rater = new EfficientRater(r);
            for (int k = 0; k < ratings.size(); k++) {
                String mAndR = ratings.get(k);
                int index = mAndR.indexOf("-");
                String mID = mAndR.substring(0, index);
                String rating = mAndR.substring(index + 1);
                rater.addRating(mID, Double.parseDouble(rating));
            }
            raters.add(rater);
        }
        return raters;
    }

    private ArrayList getMaxRaters(ArrayList<EfficientRater> in) {
        ArrayList<String> out = new ArrayList<String>();
        int maxRatings = 0;
        for (int k = 0; k < in.size(); k++) {
            EfficientRater r = in.get(k);
            ArrayList<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            if (numRatings > maxRatings) {
                maxRatings = numRatings;
            }
        }
        for (int k = 0; k < in.size(); k++) {
            EfficientRater r = in.get(k);
            ArrayList<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            if (numRatings == maxRatings) {
                out.add(r.getID());
            }
        }
        return out;
    }

    private int getNumRatings(ArrayList<EfficientRater> list, int target) {
        for (int k = 0; k < list.size(); k++) {
            EfficientRater r = list.get(k);
            ArrayList<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            int id = Integer.parseInt(r.getID());
            if (id == target) {
                return numRatings;
            }
        }
        return -1;
    }

    private int numRatingsForMovie(ArrayList<EfficientRater> list, String id) {
        int numRatings = 0;
        for (int i = 0; i < list.size(); i++) {
            EfficientRater r = list.get(i);
            ArrayList<String> itemsRated = r.getItemsRated();
            for (int k = 0; k < itemsRated.size(); k++) {
                if (id.equals(itemsRated.get(k))) {
                    numRatings++;
                }
            }
        }
        return numRatings;
    }

    private int getUniqueMovies(ArrayList<EfficientRater> list) {
        HashMap<String, Integer> movies = new HashMap<String, Integer>();
        for (int k = 0; k < list.size(); k++) {
            EfficientRater r = list.get(k);
            ArrayList<String> itemsRated = r.getItemsRated();
            for (int i = 0; i < itemsRated.size(); i++) {
                String movie = itemsRated.get(i);
                if (!movies.containsKey(movie)) {
                    movies.put(movie, 1);
                } else {
                    movies.put(movie, movies.get(movie) + 1);
                }
            }
        }

        return movies.size();
    }

    public void testLoadRaters() {
        //String f = "data/ratings_short.csv";
        String f = "data/ratings.csv";
        ArrayList<EfficientRater> raters = loadRaters(f);
        int ratingCount = 0;
        int targetID = 193;
        int maxRatings = 0;
        String targetMovieID = "1798709";
        ArrayList<String> maxRaters = getMaxRaters(raters);
        for (int k = 0; k < raters.size(); k++) {
            EfficientRater r = raters.get(k);
            ArrayList<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            ratingCount += itemsRated.size();
            int id = Integer.parseInt(r.getID());
            //System.out.println(id);
            if (numRatings > maxRatings) {
                maxRatings = numRatings;
            }
        }
        System.out.println("Rater with ID " + targetID + " has " + getNumRatings(raters, targetID) + " ratings");
        System.out.println("Total Raters: " + raters.size());
        System.out.println("Total Ratings: " + ratingCount);
        System.out.println("Highest num of ratings: " + maxRatings);
        System.out.println("Raters with " + maxRatings + " ratings include: ");
        for (int k = 0; k < maxRaters.size(); k++) {
            System.out.println("Rater " + maxRaters.get(k));
        }
        System.out.println("Movie " + targetMovieID + " has " + numRatingsForMovie(raters, targetMovieID) + " ratings");
        System.out.println("There are " + getUniqueMovies(raters) + " different movies");
    }

    public void testLoadMovies() {
        String f = "data/ratedmovies_short.csv";
        f = "data/ratedmoviesfull.csv";
        List<Movie> movies = loadMovies(f);
        HashMap<String, Integer> directorCount = new HashMap<String, Integer>();
        System.out.println("Movies in file: " + movies.size());
        int comCount = 0;
        int longCount = 0;
        int mostByDirector = 0;
        for (Movie m : movies) {
            String genre = m.getGenres();
            int length = m.getMinutes();
            String director = m.getDirector();
            //System.out.println(genre);
            if (genre.indexOf("Comedy") != -1) {
                comCount++;
            }
            if (length > 150) {
                longCount++;
            }
            if (directorCount.containsKey(director)) {
                directorCount.put(director, directorCount.get(director) + 1);
            }
            if (!directorCount.containsKey(director)) {
                directorCount.put(director, 1);
            }
        }
        System.out.println("Number of comedies: " + comCount);
        System.out.println("Number of movies over 150 minutes: " + longCount);
        for (String director : directorCount.keySet()) {
            int maxDirected = directorCount.get(director);
            if (maxDirected > mostByDirector) {
                mostByDirector = maxDirected;
            }
        }
        System.out.println("Most movies by a single director: " + mostByDirector);
        System.out.println("The following directors directed " + mostByDirector + " movies:");
        for (String director : directorCount.keySet()) {
            if (directorCount.get(director) == mostByDirector) {
                System.out.println(director);
            }
        }

    }

}
