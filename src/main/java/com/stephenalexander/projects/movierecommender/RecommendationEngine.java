package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.movie.MovieService;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rater.RaterService;
import com.stephenalexander.projects.movierecommender.rating.BasicRating;
import com.stephenalexander.projects.movierecommender.rating.Rating;
import com.stephenalexander.projects.movierecommender.rating.RatingRepository;
import com.stephenalexander.projects.movierecommender.rating.RatingService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class RecommendationEngine {
    private final MovieService movieService;
    private final RaterService raterService;
    private final RatingService ratingService;
    private int numRatersToCompareTo;
    private int strictness;
    private Rater user;
    private List<BasicRating> similarRaters;

    @Autowired
    public RecommendationEngine(MovieService movieService, RaterService raterService, RatingService ratingService) {
        this.movieService = movieService;
        this.raterService = raterService;
        this.ratingService = ratingService;
        numRatersToCompareTo = 10;
        strictness = 3;
    }


    public List<Movie> getRecommendations(Rater user) {
        getSimilarRaters(user);
        return createRecommendationList();
    }

    private void getSimilarRaters(Rater user) {
        this.user = user;
        similarRaters = new ArrayList<>();
        for (Rater databaseRater : raterService.getAllRaters()) {
            //TODO: Is there a more elegant solution to this check?
            if (databaseRater.equals(user)) {
                continue;
            }
            double weightedRatingValue = getSimilarityRating(databaseRater);
            //TODO: Another instance of maybe wanting doubles? Although an int would suffice here
            if(weightedRatingValue >= 0) {
                similarRaters.add(new BasicRating(databaseRater.getId().intValue(), weightedRatingValue));
            }
        }
    }

    private double getSimilarityRating(Rater databaseRater) {
        double weightedRating = 0.0;
        for(Movie movie : movieService.getAllMovies()) {
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
        return ratingService
                .findByRaterIdAndMovieId(rater.getId(), movie.getId())
                .isPresent();
    }

    private double getDotProduct(Movie movie, Rater databaseRater) {
        Optional<Rating> userRating = ratingService.findByRaterIdAndMovieId(user.getId(), movie.getId());
        Optional<Rating> dbRaterRating = ratingService.findByRaterIdAndMovieId(databaseRater.getId(), movie.getId());
        return (userRating.get().getRatingValue() - 5) * (dbRaterRating.get().getRatingValue() - 5);
    }

    private List<Movie> createRecommendationList() {
        List<BasicRating> weightedMovieRatings = new ArrayList<>();
        for(Movie movie : movieService.getAllMovies()) {
            double weightedRatingValue = getWeightedRating(movie);
            if (movieMetRequirements(weightedRatingValue)) {
                weightedMovieRatings.add(new BasicRating(movie.getId(), weightedRatingValue));
            }
        }
        Collections.sort(weightedMovieRatings, Collections.reverseOrder());
        return populateMovieList(weightedMovieRatings);
    }

    private List<Movie> populateMovieList(List<BasicRating> weightedMovieRatings) {
        List<Movie> recommendations = new ArrayList<>();
        for(BasicRating basicRating : weightedMovieRatings) {
            Optional<Movie> movieOptional = movieService.findById(basicRating.getId());
            recommendations.add(movieOptional.get());
        }
        return recommendations;
    }
    //TODO: IDs are all over the place. Bouncing between longs and ints. Maybe standardize?
    private double getWeightedRating(Movie movie) {
        double totalRatingPoints = 0.0;
        int validRatingCount = 0;
        for(int i = 0; i < numRatersToCompareTo; i++) {
            // or else throw? Should be in database...
            // lots of boilerplate to extract to other method?
            Optional<Rater> similarRater = raterService.findById(Long.valueOf(similarRaters.get(i).getId()));
            Optional<Rating> ratingFromSimilarRater =
                    ratingService.findByRaterIdAndMovieId(
                            similarRater.get().getId(), movie.getId()
                    );
            double similarityIndex = similarRaters.get(i).getValue();
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

    public void setUser(Rater user) {
        this.user = user;
    }

    public void setNumRatersToCompareTo(int numRatersToCompareTo) {
        this.numRatersToCompareTo = numRatersToCompareTo;
    }
}
