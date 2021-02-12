package com.stephenalexander.projects.movierecommender.movies;

import com.stephenalexander.projects.movierecommender.RecommendationEngine;
import com.stephenalexander.projects.movierecommender.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RequestMapping("api/v1/movies")
@RestController
public class MovieController {

//    @Autowired
//    private MovieDatabase movieDatabase;
//
//
//
//    @RequestMapping
//    @ResponseBody
//    public ResponseEntity<List<Movie>> getAllMovies() {
//        return ResponseEntity.of(Optional.of(movieDatabase.getAllMovies()));
//    }
//
//    @RequestMapping(path="/top10")
//    @ResponseBody
//    public ResponseEntity<List<Movie>> getTopTenMovies() {
//        return ResponseEntity.of(Optional.of(movieDatabase.getAllMovies()));
//    }


    private final RecommendationEngine recommendationEngine;

    @Autowired
    public MovieController(RecommendationEngine recommendationEngine) {
        this.recommendationEngine = recommendationEngine;
    }


    @RequestMapping
    @ResponseBody
    public ResponseEntity<List<Movie>> getMoviesToRate() {
        return ResponseEntity.of(Optional.of(recommendationEngine.getMoviesToRate()));
    }
}
