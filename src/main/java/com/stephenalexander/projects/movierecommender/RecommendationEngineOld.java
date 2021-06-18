//package com.stephenalexander.projects.movierecommender;
//
//import com.stephenalexander.projects.movierecommender.movie.Movie;
//import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
//import com.stephenalexander.projects.movierecommender.rater.Rater;
//import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
//import com.stephenalexander.projects.movierecommender.rating.Rating;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.*;
//
//// TODO: Reimplement logic
//
//public class RecommendationEngineOld {
//
//    private final RaterRepository raterRepository;
//    private final MovieRepository movieRepository;
//
//    @Autowired
//    public RecommendationEngineOld(RaterRepository raterRepository, MovieRepository movieRepository) {
//        this.raterRepository = raterRepository;
//        this.movieRepository = movieRepository;
//    }
//
//    //TODO: create a new kind of rating class to handle this sort of rating
//    //TODO: change type in rating value to double in every instance
//
//    public List<Rating> refactoredGetRecommendations(Rater user, int numRatersToCompareTo,
//                                                     int minSharedRatingsAmongSimilarRaters) {
//        List<Rating> recommendations = new ArrayList<>();
//        List<Rating> similarRaters = getSimilarRaters(user);
//        Set<Movie> allMovies = movieRepository.getAllMovies();
//        for(Movie movie : allMovies) {
//            double totalRatingPoints = 0.0;
//            int validRatingCount = 0;
//            double weightedMovieRating = getWeightedMovieRating(movie, similarRaters);
//            if(weightedMovieRating > -1.0) {
//                totalRatingPoints +=
//            }
//        }
//        return recommendations;
//    }
//    public List<Rating> getRecommendations(Rater user, int numRatersToCompareTo,
//                                          int minSharedRatingsAmongSimilarRaters) {
//        List<Rating> recommendations = new ArrayList<>();
//        List<Rating> similarRaters = getSimilarRaters(user);
//        Set<Movie> allMovies = movieRepository.getAllMovies();
//        for(Movie movie : allMovies) {
//            double totalRatingPoints = 0.0;
//            int validRatingCount = 0;
//            for(int i = 0; i < numRatersToCompareTo; i++) {
//                double similarityIndex = similarRaters.get(i).getRatingValue();
//                long raterId = similarRaters.get(i).getRaterID();
//                //TODO: It's unlikely, but possible, that bad code would result in this optional being unpopulated...
//                // The list of raters is populated directly from raters that were successfully pulled from the
//                // database. Should I make sure the object is present before working with it? No longer need this
//                // object, but kept for question about optionals
//                Optional<Rater> similarRater = raterRepository.findById(raterId);
//                //TODO: What is the appropriate way to handle these optionals? Still hazy on why they're useful... do
//                // they essentially just say, "This object is very possibly null, so it would be good to verify"?
//                Optional<Rating> ratingFromSimilarRater = raterRepository.findRatingByRaterIdAndMovieId(raterId,
//                        movie.getMovieId());
//                double movieRating = ratingFromSimilarRater.get().getRatingValue();
//                if(movieRating != -1.0 && similarityIndex > -1.0) {
//                    totalRatingPoints += similarityIndex * movieRating;
//                    validRatingCount += 1;
//                }
//            }
//            if(validRatingCount >= minSharedRatingsAmongSimilarRaters) {
//                double weightedAverage = totalRatingPoints/validRatingCount;
//                //TODO: Change type of ratingValue to be double? Could be useful to have decimals. Also, is the
//                // answer to cast the integer as I did here?
//                Rating weightedRating = new Rating((long)movie.getMovieId(), weightedAverage);
//                recommendations.add(weightedRating);
//            }
//        }
//        Collections.sort(recommendations, Collections.reverseOrder());
//        return recommendations;
//    }
//    //TODO: How do you get it add a blank line when you make a new method?
//    private List<Rating> getSimilarRaters(Rater user) {
//        List<Rating> similarRaters = new ArrayList<>();
//
//        return similarRaters;
//    }
//}
////    public List<Rating> getSimilarRatings(String userID, int numSimilarRaters, int minimumSharedRatingsAmongSimilarRaters) {
////        List<Rating> similarMovies = new ArrayList<>();
////        List<Rating> similarRaters = getSimilarities(userID);
////        List<String> allMovies = movieRepository.();
////        for (String movieID : allMovies) {
////            double total = 0.0;
////            int numSimilarRatings = 0;
////            for (int k=0; k<numSimilarRaters; k++) {
////                double similarityIndex = similarRaters.get(k).getValue();
////                Rating similarityOfRater = similarRaters.get(k);
////                String similarRaterID = similarityOfRater.getItem();
////                Rater similarRater = raterDatabase.getRater(similarRaterID);
////                double movieRatingFromSimilarRater = similarRater.getRating(movieID);
////                if (movieRatingFromSimilarRater != -1.0 && similarityIndex > -1.0) {
////                    double totalSimilarityRating = similarityIndex * movieRatingFromSimilarRater;
////                    total += totalSimilarityRating;
////                    numSimilarRatings += 1;
////                }
////            }
////            if (numSimilarRatings >= minimumSharedRatingsAmongSimilarRaters) {
////                double weightedAverage = total/numSimilarRatings;
////                Rating r = new Rating(movieID, weightedAverage);
////                similarMovies.add(r);
////            }
////        }
////        Collections.sort(similarMovies, Collections.reverseOrder());
////        return similarMovies;
////    }
////
////    private List<Rating> getSimilarities(String userId) {
////        List<Rating> weightedRatings = new ArrayList<>();
////        Rater user = raterDatabase.getRater(userId);
////        for (Rater databaseRater : raterDatabase.getRaters()) {
////            if (! databaseRater.getID().equals(userId)) {
////                double weightedRatingValue = dotProduct(user, databaseRater);
////                if (weightedRatingValue >= 0) {
////                    Rating weightedRating = new Rating(databaseRater.getID(), weightedRatingValue);
////                    weightedRatings.add(weightedRating);
////                }
////            }
////        }
////        Collections.sort(weightedRatings, Collections.reverseOrder());
////        return weightedRatings;
////    }
////
////    private double dotProduct(Rater user, Rater databaseRater) {
////        List<String> movies = movieDatabase.filterBy(new TrueFilter());
////        double weightedRating = 0.0;
////        for (String id : movies) {
////            if (user.hasRating(id) && databaseRater.hasRating(id)) {
////                double myRating = user.getRating(id) - 5;
////                double theirRating = databaseRater.getRating(id) - 5;
////                weightedRating += myRating*theirRating;
////            }
////        }
////        return weightedRating;
////    }
//
