package com.stephenalexander.projects.moviecollection.rating;

import com.stephenalexander.projects.moviecollection.movie.Movie;
import com.stephenalexander.projects.moviecollection.movie.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//TODO change path to v1 api whatever
@RequestMapping("api/v1/ratings")
@RestController
public class RatingController {

    private final RatingRepository ratingRepository;
    private final RatingService ratingService;
    private final MovieService movieService;

    @Autowired
    public RatingController(RatingRepository ratingRepository, RatingService ratingService,
                            MovieService movieService) {
        this.ratingRepository = ratingRepository;
        this.ratingService = ratingService;
        this.movieService = movieService;
    }

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

//    //TODO: TIM QUESTION: Do I need to handle the case where the movie doesn't exist?
//    @PostMapping
//    public ResponseEntity<List<Movie>> handleSubmission(@RequestBody Map<String, List<Map<String, Integer>>> payload) {
//        List<Map<String, Integer>> ratings = payload.get("userRatings");
//        Rater user = new Rater();
//        raterService.addNewRater(user);
//        for (int i = 0; i < ratings.size(); i++) {
//            Map<String, Integer> ratingMap = ratings.get(i);
//            Rating rating = new Rating(ratingMap.get("id"), Double.valueOf(ratingMap.get(
//                    "rating")));
//            rating.setRaterId(user.getId());
//            ratingService.addNewRating(rating);
//            user.addRating(rating);
//        }
//
////        return ResponseEntity.of(Optional.of(new ArrayList<Movie>()));
//        return ResponseEntity.of(Optional.of(recommendationEngine.getRecommendations(user)));
//    }
}
