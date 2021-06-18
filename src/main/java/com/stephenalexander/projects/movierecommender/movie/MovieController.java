package com.stephenalexander.projects.movierecommender.movie;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RequestMapping("api/v1/movies")
@RestController
public class MovieController {

    private final RecommendationEngine recommendationEngine;
    private final MovieRepository movieRepository;

    @Autowired
    public MovieController(RecommendationEngine recommendationEngineOld, MovieRepository movieRepository) {
        this.recommendationEngine = recommendationEngineOld;
        this.movieRepository = movieRepository;
    }

//    @PostMapping
//    public void addRater(@RequestBody EfficientRater efficientRater) {
//
//    }

    @RequestMapping
    public ResponseEntity<Collection<Movie>> getMoviesToRate() {
        return ResponseEntity.of(Optional.of(movieRepository.getTopMovies()));
    }

}
