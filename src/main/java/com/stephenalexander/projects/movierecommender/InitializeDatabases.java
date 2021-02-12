package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.model.EfficientRater;
import com.stephenalexander.projects.movierecommender.model.Movie;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InitializeDatabases {
    Map<String, ArrayList<String>> raterMap;

    public List<Movie> loadMovies(String filename) {
        List<Movie> movies = new ArrayList<>();
        ParserFactory parserFactory = new ParserFactory();
        CSVParser parser = parserFactory.getParser(filename);
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

    public List<EfficientRater> loadRaters(String filename) {
        List<EfficientRater> raters = new ArrayList<>();
        raterMap = new HashMap<>();
        ParserFactory parserFactory = new ParserFactory();
        CSVParser parser = parserFactory.getParser(filename);
        for (CSVRecord record : parser) {
            String rID = record.get("rater_id");
            String mID = record.get("movie_id");
            String rating = record.get("rating");
            EfficientRater rater = new EfficientRater(rID);
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

//    public List<Movie> loadMovies(String filename) {
//        List<Movie> movies = new ArrayList<>();
//        CSVParser parser = getCSVParser(filename);
//        for (CSVRecord record : parser) {
//            String id = record.get("id");
//            String title = record.get("title");
//            String year = record.get("year");
//            String country = record.get("country");
//            String genre = record.get("genre");
//            String director = record.get("director");
//            int minutes = Integer.parseInt(record.get("minutes"));
//            String poster = record.get("poster");
//            Movie movie = new Movie(id, title, year, genre, director, country, poster, minutes);
//            movies.add(movie);
//        }
//        return movies;
//    }

//    private CSVParser getCSVParser(String filename) {
//        final URL resource = InitializeDatabases.class.getResource(filename);
//        if (resource == null) {
//            throw new RuntimeException("File not found: " + filename);
//        }
//        try {
//            URI resourceURI = resource.toURI();
//            File file = new File(resourceURI);
//            Reader reader = new BufferedReader(new FileReader(file));
//            return CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(reader);
//        } catch (IOException | URISyntaxException e) {
//            e.printStackTrace();
//            throw new RuntimeException(e);
//        }
//    }

//    public List<EfficientRater> loadRaters(String filename) {
//        List<EfficientRater> raters = new ArrayList<>();
//        raterMap = new HashMap<>();
//        CSVParser parser = getCSVParser(filename);
//        for (CSVRecord record : parser) {
//            String rID = record.get("rater_id");
//            String mID = record.get("movie_id");
//            String rating = record.get("rating");
//            EfficientRater rater = new EfficientRater(rID);
//            // rater.addRating(mID, Double.parseDouble(rating));
//            // raters.add(rater);
//
//            if (raterMap.containsKey(rID)) {
//                ArrayList<String> ratings = raterMap.get(rID);
//                String mAndR = mID + "-" + rating;
//                ratings.add(mAndR);
//                raterMap.put(rID, ratings);
//            }
//            if (!raterMap.containsKey(rID)) {
//                ArrayList<String> ratings = new ArrayList<String>();
//                String mAndR = mID + "-" + rating;
//                ratings.add(mAndR);
//                raterMap.put(rID, ratings);
//            }
//        }
//        for (String r : raterMap.keySet()) {
//            ArrayList<String> ratings = raterMap.get(r);
//            EfficientRater rater = new EfficientRater(r);
//            for (int k = 0; k < ratings.size(); k++) {
//                String mAndR = ratings.get(k);
//                int index = mAndR.indexOf("-");
//                String mID = mAndR.substring(0, index);
//                String rating = mAndR.substring(index + 1);
//                rater.addRating(mID, Double.parseDouble(rating));
//            }
//            raters.add(rater);
//        }
//        return raters;
//    }

    private List getMaxRaters(List<EfficientRater> in) {
        List<String> out = new ArrayList<>();
        int maxRatings = 0;
        for (int k = 0; k < in.size(); k++) {
            EfficientRater r = in.get(k);
            List<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            if (numRatings > maxRatings) {
                maxRatings = numRatings;
            }
        }
        for (int k = 0; k < in.size(); k++) {
            EfficientRater r = in.get(k);
            List<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            if (numRatings == maxRatings) {
                out.add(r.getID());
            }
        }
        return out;
    }

    private int getNumRatings(List<EfficientRater> list, int target) {
        for (int k = 0; k < list.size(); k++) {
            EfficientRater r = list.get(k);
            List<String> itemsRated = r.getItemsRated();
            int numRatings = itemsRated.size();
            int id = Integer.parseInt(r.getID());
            if (id == target) {
                return numRatings;
            }
        }
        return -1;
    }
}
