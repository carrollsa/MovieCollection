package com.stephenalexander.projects.movierecommender.ratings;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//TODO change path to v1 api whatever
@RequestMapping("ratings-submitted")
@RestController
public class RatingsController {

    private final RecommendationEngine recommendationEngine;
    private final RatingsRepository ratingsRepository;

    @Autowired
    public RatingsController(RecommendationEngine recommendationEngine, RatingsRepository ratingsRepository) {
        this.recommendationEngine = recommendationEngine;
        this.ratingsRepository = ratingsRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Map<String,String>> submitRatings(@RequestBody Map<Long, Integer> ratedMap) {
        for (Map.Entry<Long, Integer> movieRating : ratedMap.entrySet()) {
            Rating rating = new Rating(movieRating.getKey(), movieRating.getValue());
            rating.setRaterID(1L);
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

//    @RequestMapping
//    @ResponseBody
//    public String ratingsSubmitted() {
//        return "ratings-submitted";
//    }
}
