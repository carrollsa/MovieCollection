package com.stephenalexander.projects.movierecommender.raters;

import com.stephenalexander.projects.movierecommender.obsolete.RecommendationEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping
@RestController
public class RatersController {
    private final RecommendationEngine recommendationEngine;
    private final RatersRepository ratersRepository;

    @Autowired
    public RatersController(RecommendationEngine recommendationEngine, RatersRepository ratersRepository) {
        this.recommendationEngine = recommendationEngine;
        this.ratersRepository = ratersRepository;
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
