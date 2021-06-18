package com.stephenalexander.projects.movierecommender.rater;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping(value = "/testrc")
@RestController
public class RaterController {
    private final RecommendationEngine recommendationEngine;
    private final RaterService raterService;

    @Autowired
    public RaterController(RecommendationEngine recommendationEngineOld, RaterService raterService) {
        this.recommendationEngine = recommendationEngineOld;
        this.raterService = raterService;
    }

    @PostMapping
    public void addNewRater(@RequestBody Rater rater) {
        raterService.addNewRater(rater);
    }

    @GetMapping
    public ResponseEntity<Collection<Rater>> getRaters() {
        return raterService.getTopRaters();
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
