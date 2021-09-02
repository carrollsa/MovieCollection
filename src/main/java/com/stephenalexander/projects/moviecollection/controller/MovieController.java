package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.entity.Movie;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("api/v1")
@RestController
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    @ResponseBody
    public ResponseEntity<Optional<List<Movie>>> findMoviesByTitle(@RequestParam String title) {
        return ResponseEntity.of(Optional.of(movieService.findByTitleSnippet(title)));
    }
}
