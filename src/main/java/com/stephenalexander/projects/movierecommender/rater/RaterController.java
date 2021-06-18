package com.stephenalexander.projects.movierecommender.raters;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping
@RestController
public class RaterController {
    private final RecommendationEngine recommendationEngine;
    private final RaterRepository raterRepository;

    @Autowired
    public RaterController(RecommendationEngine recommendationEngine, RaterRepository raterRepository) {
        this.recommendationEngine = recommendationEngine;
        this.raterRepository = raterRepository;
    }

//    @RequestMapping(method = RequestMethod.POST)
//    @ResponseBody
//    public ResponseEntity<Map<String, String>> submitRatings(@RequestBody Map<Long, Integer> ratersMap) {
//        for (Map.Entry<Long, Integer> newRater : ratersMap.entrySet()) {
//            Rater rater = new Rater();
//        }
//
//    }
}
