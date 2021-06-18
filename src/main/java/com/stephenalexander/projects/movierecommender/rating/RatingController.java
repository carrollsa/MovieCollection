package com.stephenalexander.projects.movierecommender.rating;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rater.RaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//TODO change path to v1 api whatever
@RequestMapping("ratings-submitted")
@RestController
public class RatingController {

    //TODO: Is there a benefit to making these final and having to make a constructor for them as a result? And is
    // this the correct place to put all of this given it needs services from the rater and rating repository? Can I
    // have two different classes receive mapping from the same URL?

    private final RatingService ratingService;
    private final RaterService raterService;
    private final RecommendationEngine recommendationEngine;

    @Autowired
    public RatingController(RatingService ratingService, RaterService raterService,
                            RecommendationEngine recommendationEngine) {
        this.ratingService = ratingService;
        this.raterService = raterService;
        this.recommendationEngine = recommendationEngine;
    }

    //TODO: TIM QUESTION - Verify this stuff?
    //Changed value from Integer to Double. Don't know if that will mess up this request. Can fairly easily change
    // column in Rating table to be a decimal.
    //Also not sure what the deal is with the connections here from the @RequestBody and the return map.
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

    //TODO: TIM QUESTION - How would I check if the movie exists in the database? Add a movieService as well?
    @PostMapping
    public void addNewRating(@RequestBody Rating rating) {
        ratingService.addNewRating(rating);
    }

}
