package com.stephenalexander.projects.movierecommender.movie;

import com.stephenalexander.projects.movierecommender.obsolete.RecommendationEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("api/v1/movies")
@RestController
public class MovieController {

    private final RecommendationEngine recommendationEngine;

    @Autowired
    public MovieController(RecommendationEngine recommendationEngine) {
        this.recommendationEngine = recommendationEngine;
    }

//    @PostMapping
//    public void addRater(@RequestBody EfficientRater efficientRater) {
//
//    }

    @RequestMapping
    @ResponseBody
    public ResponseEntity<List<Movie>> getMoviesToRate() {
        return ResponseEntity.of(Optional.of(recommendationEngine.getMoviesToRate()));
    }

}
