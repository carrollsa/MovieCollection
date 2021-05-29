package com.stephenalexander.projects.movierecommender.obsolete;


import com.stephenalexander.projects.movierecommender.filter.TrueFilter;
import com.stephenalexander.projects.movierecommender.obsolete.rater.Rater;
import com.stephenalexander.projects.movierecommender.obsolete.rater.RaterDatabase;
import com.stephenalexander.projects.movierecommender.obsolete.rater.Rating;
import com.stephenalexander.projects.movierecommender.movie.Movie;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RecommendationEngine {
    private final RaterDatabase raterDatabase;
    private final MovieDatabase movieDatabase;

    public RecommendationEngine(RaterDatabase raterDatabase, MovieDatabase movieDatabase) {
        this.raterDatabase = raterDatabase;
        this.movieDatabase = movieDatabase;
    }
    
    public double getAverageByID(String id, int minimalRaters) {
        double numRatings = 0.0;
        double ratingTotal = 0.0;
        for (Rater r : raterDatabase.getRaters()) {
            if (r.hasRating(id)) {
                numRatings ++;
                ratingTotal += r.getRating(id);
            }
        }
        if (numRatings < minimalRaters) {
            return 0.0;
        }

        return ratingTotal/numRatings;
    }

    /* returns a list of the top movies from
    each genre, attempting to not have more
    than one movie from a single franchise
    */
    public List<Movie> getMoviesToRate() {
        List<Movie> returnList = new ArrayList<Movie>();
        List<String> ids = new ArrayList<String>();
        String genreString = "Action Thriller Biography Drama Comedy Romance Adventure Animation Horror Crime Sci-Fi " +
                "Sport Music Musical Documentary History Film-Noir Fantasy";
        String[] genres = genreString.split(" ");
        for (int i=0; i<genres.length; i++) {
            List<Rating> ratings = getAverageRatings(5);
            Collections.sort(ratings, Collections.reverseOrder());
            for (Rating rating : ratings) {
                String id = rating.getItem();
                String tempGenre = movieDatabase.getGenres(id);
                if (tempGenre.indexOf(genres[i]) != -1 && !ids.contains(id)) {
                    ids.add(id);
                    break;
                }
            }
        }
        for (String id : ids) {
            returnList.add(movieDatabase.getMovie(id));
        }
        return returnList;
    }

    public List<Rating> getAverageRatings(int minimalRaters) {
        List<String> movies = movieDatabase.filterBy(new TrueFilter());
        List<Rating> ratings = new ArrayList<>();
        for (int k = 0; k < movies.size(); k++) {
            String id = movies.get(k);
            double avg = getAverageByID(id, minimalRaters);
            if (avg > 0) {
                Rating r = new Rating(id, avg);
                ratings.add(r);
            }
        }
        return ratings;
    }

    private double dotProduct(Rater me, Rater r) {
        List<String> movies = movieDatabase.filterBy(new TrueFilter());
        double product = 0.0;
        for (String id : movies) {
            if (me.hasRating(id) && r.hasRating(id)) {
                double myRating = me.getRating(id) - 5;
                double theirRating = r.getRating(id) - 5;
                product += myRating*theirRating;
            }
        }
        return product;
    }
    private List<Rating> getSimilarities(String id) {
        List<Rating> sim = new ArrayList<>();
        Rater me = raterDatabase.getRater(id);
        for (Rater r : raterDatabase.getRaters()) {
            if (! r.getID().equals(id)) {
                double prod = dotProduct(me, r);
                if (prod >= 0) {
                    Rating rat = new Rating(r.getID(), prod);
                    sim.add(rat);
                }
            }
        }
        Collections.sort(sim, Collections.reverseOrder());
        return sim;
    }
    public List<Rating> getSimilarRatings(String id, int numSimilarRaters, int minimalRaters) {
        List<Rating> simMovies = new ArrayList<>();
        List<Rating> simRaters = getSimilarities(id);
        List<String> movies = movieDatabase.filterBy(new TrueFilter());
        for (String mID : movies) {
            double total = 0.0;
            int numRatings = 0;
            for (int k=0; k<numSimilarRaters; k++) {
                //get similarityrating
                double similarityRating = simRaters.get(k).getValue();
                //get their id
                Rating temp = simRaters.get(k);
                String rID = temp.getItem();
                //get their rating of movie
                Rater rater = raterDatabase.getRater(rID);
                double movieRating = rater.getRating(mID);
                //calculate weighted average
                if (movieRating != -1.0 && similarityRating > -1.0) {
                    double totalSim = similarityRating*movieRating;
                    total += totalSim;
                    numRatings += 1;
                }
            }
            if (numRatings >= minimalRaters) {
                double weightedAverage = total/numRatings;
                Rating r = new Rating(mID, weightedAverage);
                simMovies.add(r);
            }
        }
        Collections.sort(simMovies, Collections.reverseOrder());
        return simMovies;
    }
}
