package com.stephenalexander.projects.movierecommender.rating;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.movie.MovieService;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rater.RaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.*;

//TODO change path to v1 api whatever
@RequestMapping("recommendations")
@RestController
public class RatingController {

    private final RatingService ratingService;
    private final RaterService raterService;
    private final MovieService movieService;
    private final RecommendationEngine recommendationEngine;

    @Autowired
    public RatingController(RatingService ratingService, RaterService raterService,
                            RecommendationEngine recommendationEngine, MovieService movieService) {
        this.ratingService = ratingService;
        this.raterService = raterService;
        this.movieService = movieService;
        this.recommendationEngine = recommendationEngine;
    }

//    @RequestMapping(method = RequestMethod.POST)
//    public ResponseEntity<List<Movie>> submitRatings(@RequestBody Map<Integer, Double> ratedMap) {
//        Rater rater = new Rater();
//        for (Map.Entry<Integer, Double> movieRating : ratedMap.entrySet()) {
//            Rating rating = new Rating(movieRating.getKey(), movieRating.getValue());
//            rater.getRatings().add(rating);
//        }
//        raterService.addNewRater(rater);
//        return ResponseEntity.of(Optional.of(recommendationEngine.getRecommendations(rater)));
//    }

//    @PostMapping
//    public ResponseEntity<List<Movie>> handleSubmission(@RequestBody Map<Integer, Double> ratedMap) {
//        Rater rater = new Rater();
//        for (Map.Entry<Integer, Double> movieRating : ratedMap.entrySet()) {
//            Rating rating = new Rating(movieRating.getKey(), movieRating.getValue());
//            rater.getRatings().add(rating);
//        }
//        raterService.addNewRater(rater);
//        return ResponseEntity.of(Optional.of(recommendationEngine.getRecommendations(rater)));
//    }

    //TODO: TIM QUESTION: Do I need to handle the case where the movie doesn't exist?
    @PostMapping
    public ResponseEntity<List<Movie>> handleSubmission(@RequestBody Map<String, List<Map<String, Integer>>> payload) {
        List<Map<String, Integer>> ratings = payload.get("userRatings");
        Rater user = new Rater();
        for(int i = 0; i < ratings.size(); i++) {
            Map<String, Integer> ratingMap = ratings.get(i);
            Optional<Movie> movieOptional = movieService.findById(ratingMap.get("id"));
            if (movieOptional.isPresent()) {
                Rating rating = new Rating(user, movieOptional.get(), Double.valueOf(ratingMap.get(
                        "rating")));
                ratingService.addNewRating(rating);
                user.addRating(rating);
            }
        }
        raterService.addNewRater(user);

        return ResponseEntity.of(Optional.of(new ArrayList<Movie>()));
//        return ResponseEntity.of(Optional.of(recommendationEngine.getRecommendations(user)));
    }

}
