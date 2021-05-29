package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.filter.TrueFilter;
import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.obsolete.rater.Rater;
import com.stephenalexander.projects.movierecommender.obsolete.rater.Rating;
import com.stephenalexander.projects.movierecommender.raters.RatersRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class RecommendationEngine {

    private final RatersRepository ratersRepository;
    private final MovieRepository movieRepository;

    @Autowired
    public RecommendationEngine(RatersRepository ratersRepository, MovieRepository movieRepository) {
        this.ratersRepository = ratersRepository;
        this.movieRepository = movieRepository;
    }

    /**
     * @param userID                                 The userID of the rater to be compared to raters in the database
     * @param numSimilarRaters                       The number of similar raters to be considered for recommendations
     * @param minimumSharedRatingsAmongSimilarRaters The minimum number of similar raters required for a movie to be
     *                                               returned
     * @return Recommended movies
     */

    public Collection<Integer> testQuery() {
        return movieRepository.getAllMovieIds();
    }
}
//    public List<Rating> getSimilarRatings(String userID, int numSimilarRaters, int minimumSharedRatingsAmongSimilarRaters) {
//        List<Rating> similarMovies = new ArrayList<>();
//        List<Rating> similarRaters = getSimilarities(userID);
//        List<String> allMovies = movieRepository.();
//        for (String movieID : allMovies) {
//            double total = 0.0;
//            int numSimilarRatings = 0;
//            for (int k=0; k<numSimilarRaters; k++) {
//                double similarityIndex = similarRaters.get(k).getValue();
//                Rating similarityOfRater = similarRaters.get(k);
//                String similarRaterID = similarityOfRater.getItem();
//                Rater similarRater = raterDatabase.getRater(similarRaterID);
//                double movieRatingFromSimilarRater = similarRater.getRating(movieID);
//                if (movieRatingFromSimilarRater != -1.0 && similarityIndex > -1.0) {
//                    double totalSimilarityRating = similarityIndex * movieRatingFromSimilarRater;
//                    total += totalSimilarityRating;
//                    numSimilarRatings += 1;
//                }
//            }
//            if (numSimilarRatings >= minimumSharedRatingsAmongSimilarRaters) {
//                double weightedAverage = total/numSimilarRatings;
//                Rating r = new Rating(movieID, weightedAverage);
//                similarMovies.add(r);
//            }
//        }
//        Collections.sort(similarMovies, Collections.reverseOrder());
//        return similarMovies;
//    }
//
//    private List<Rating> getSimilarities(String userId) {
//        List<Rating> weightedRatings = new ArrayList<>();
//        Rater user = raterDatabase.getRater(userId);
//        for (Rater databaseRater : raterDatabase.getRaters()) {
//            if (! databaseRater.getID().equals(userId)) {
//                double weightedRatingValue = dotProduct(user, databaseRater);
//                if (weightedRatingValue >= 0) {
//                    Rating weightedRating = new Rating(databaseRater.getID(), weightedRatingValue);
//                    weightedRatings.add(weightedRating);
//                }
//            }
//        }
//        Collections.sort(weightedRatings, Collections.reverseOrder());
//        return weightedRatings;
//    }
//
//    private double dotProduct(Rater user, Rater databaseRater) {
//        List<String> movies = movieDatabase.filterBy(new TrueFilter());
//        double weightedRating = 0.0;
//        for (String id : movies) {
//            if (user.hasRating(id) && databaseRater.hasRating(id)) {
//                double myRating = user.getRating(id) - 5;
//                double theirRating = databaseRater.getRating(id) - 5;
//                weightedRating += myRating*theirRating;
//            }
//        }
//        return weightedRating;
//    }

}
