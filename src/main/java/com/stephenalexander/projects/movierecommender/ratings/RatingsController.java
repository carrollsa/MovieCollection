package com.stephenalexander.projects.movierecommender.ratings;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import com.stephenalexander.projects.movierecommender.movie.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("api/v1/ratings")
@RestController
public class RatingsController {

    private final RecommendationEngine recommendationEngine;
    private final RatingsRepository ratingsRepository;

    @Autowired
    public RatingsController(RecommendationEngine recommendationEngine, RatingsRepository ratingsRepository) {
        this.recommendationEngine = recommendationEngine;
        this.ratingsRepository = ratingsRepository;
    }

//    @PostMapping
//    public void addRater(@RequestBody EfficientRater efficientRater) {
//
//    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Map<String,String>> submitRatings(@RequestBody Map<Long, Integer> ratedMap) {
        for (Map.Entry<Long, Integer> movieRating : ratedMap.entrySet()) {
            Rating rating = new Rating();
            rating.setMovieID(movieRating.getKey());
            rating.setRatingValue(movieRating.getValue());
            ratingsRepository.save(rating);
        }
        return ResponseEntity.of(Optional.of(new HashMap<>()));
    }

    @RequestMapping
    @ResponseBody
    public ResponseEntity<List<Rating>> getAllRatings() {
        Iterable<Rating> ratingIterable = ratingsRepository.findAll();
        List<Rating> ratingList = new ArrayList<>();
        for (Rating rating : ratingIterable) {
            ratingList.add(rating);
        }
        return ResponseEntity.of(Optional.of(ratingList));
    }
}
