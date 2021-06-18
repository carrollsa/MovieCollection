package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rating.BasicRating;
import com.stephenalexander.projects.movierecommender.rating.Rating;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class Recommender {
    private final RaterRepository raterRepository;
    private final MovieRepository movieRepository;
    private int numRatersToCompareTo;
    private int strictness;
    private Rater user;
    private List<Rating> similarRaters;

    @Autowired
    public Recommender(RaterRepository raterRepository, MovieRepository movieRepository, Rater user) {
        this.raterRepository = raterRepository;
        this.movieRepository = movieRepository;
        numRatersToCompareTo = 10;
        strictness = 3;
        this.user = user;
        getSimilarRaters();
    }

    private void getSimilarRaters() {
        List<Rating> similarRaters = new ArrayList<>();
        for (Rater databaseRater : raterRepository.findAll()) {
            //TODO: Is there a more elegant solution to this check?
            if (databaseRater.equals(user)) {
                continue;
            }
            double weightedRatingValue = getSimilarityRating(databaseRater);
            //TODO: Another instance of maybe wanting doubles? Although an int would suffice here
            if(weightedRatingValue >= 0) {
                similarRaters.add(new Rating(databaseRater.getRaterID(), weightedRatingValue));
            }
        }
    }

    private double getSimilarityRating(Rater databaseRater) {
        double weightedRating = 0.0;
        for(Movie movie : movieRepository.getAllMovies()) {
            if(bothRatersHaveRatedMovie(movie, databaseRater)) {
                weightedRating += getDotProduct(movie, databaseRater);
            }
        }
        return weightedRating;
    }

    private boolean bothRatersHaveRatedMovie(Movie movie, Rater databaseRater) {
        if(!hasRatedMovie(user, movie) || !hasRatedMovie(databaseRater, movie)) {
            return false;
        }
        return true;
    }

    private boolean hasRatedMovie(Rater rater, Movie movie) {
        return raterRepository
                .findRatingByRaterIdAndMovieId(rater.getRaterID(), movie.getMovieId())
                .isPresent();
    }

    private double getDotProduct(Movie movie, Rater databaseRater) {
        Optional<Rating> userRating = raterRepository
                .findRatingByRaterIdAndMovieId(user.getRaterID(), movie.getMovieId());
        Optional<Rating> databaseRaterRating = raterRepository
                .findRatingByRaterIdAndMovieId(databaseRater.getRaterID(), movie.getMovieId());
        return (userRating.get().getRatingValue() - 5) * (databaseRaterRating.get().getRatingValue() - 5);
    }


    public List<Movie> getRecommendations() {
        List<Movie> recommendations = createRecommendationList();
        return recommendations;
    }

    private List<Movie> createRecommendationList() {
        List<BasicRating> weightedMovieRatings = new ArrayList<>();
        for(Movie movie : movieRepository.getAllMovies()) {
            double weightedRatingValue = getWeightedRating(movie);
            if (movieMetRequirements(weightedRatingValue)) {
                weightedMovieRatings.add(new BasicRating(movie.getMovieId(), weightedRatingValue));
            }
        }
        Collections.sort(weightedMovieRatings, Collections.reverseOrder());
        return populateMovieList(weightedMovieRatings);
    }

    private List<Movie> populateMovieList(List<BasicRating> weightedMovieRatings) {
        List<Movie> recommendations = new ArrayList<>();
        for(BasicRating basicRating : weightedMovieRatings) {
            Optional<Movie> movieOptional = movieRepository.findById(basicRating.getId());
            recommendations.add(movieOptional.get());
        }
        return recommendations;
    }

    private double getWeightedRating(Movie movie) {
        double totalRatingPoints = 0.0;
        int validRatingCount = 0;
        for(int i = 0; i < numRatersToCompareTo; i++) {
            // or else throw? Should be in database...
            // lots of boilerplate to extract to other method?
            Optional<Rater> similarRater = raterRepository.findById(similarRaters.get(i).getRaterID());
            Optional<Rating> ratingFromSimilarRater =
                    raterRepository.findRatingByRaterIdAndMovieId(similarRater.get().getRaterID(), movie.getMovieId());
            double similarityIndex = similarRaters.get(i).getRatingValue();
            if(!ratingFromSimilarRater.isPresent() || similarityIndex < -1.0) {
                continue;
            }
            double movieRating = ratingFromSimilarRater.get().getRatingValue();
            if(similarityIndex > -1.0) {
                totalRatingPoints += similarityIndex * movieRating;
                validRatingCount += 1;
            }
        }
        if(validRatingCount >= strictness) {
            return 0;
        }
        return totalRatingPoints/validRatingCount;
    }

    private boolean movieMetRequirements(double weightedRatingValue) {
        return weightedRatingValue > 0;
    }


    /**
     * @param level level from 1-7 indicating how strict the recommender will be in considering movies to recommend
     */
    public void setStrictness(int level) {
        level = normalizeLevel(level);
        this.strictness = level;
    }

    private int normalizeLevel(int level) {
        if (level < 1) {
            return 1;
        }
        else if(level > 7) {
            return 7;
        }
        return level;
    }

    public void setNumRatersToCompareTo(int numRatersToCompareTo) {
        this.numRatersToCompareTo = numRatersToCompareTo;
    }
}
