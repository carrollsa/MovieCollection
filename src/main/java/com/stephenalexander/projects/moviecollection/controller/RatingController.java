package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.entity.Rating;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("api/v1/ratings")
@RestController
public class RatingController {

    private final RatingService ratingService;
    private final MovieRepository movieRepository;

    @Autowired
    public RatingController(RatingService ratingService, MovieRepository movieRepository) {
        this.ratingService = ratingService;
        this.movieRepository = movieRepository;
    }

    /**
     *
     * @param jsonBody - JSON body consisting of two key-value pairs with keys: movieId and ratingValue
     */
//    @PostMapping
//    public void addRating(@RequestBody Map<String, String> jsonBody) {
//        Movie movie = movieRepository.findById(jsonBody.get("movieId"));
//        Rating rating = new Rating(Double.parseDouble(jsonBody.get("ratingValue")));
//        rating.setMovie(movie);
//        ratingService.addNewRating(rating);
//    }

    @PostMapping
    public void addOrUpdateRating(@RequestBody Map<String, String> jsonBody) {
        ratingService.addOrUpdate(jsonBody);
    }

    @GetMapping
    public ResponseEntity<Optional<List<Rating>>> displayCollection() {
        return ResponseEntity.of(Optional.of(ratingService.getTopRatings()));
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
