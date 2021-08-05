package com.stephenalexander.projects.movierecommender.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RequestMapping("api/v1/movies")
@RestController
public class MovieController {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @RequestMapping
    public ResponseEntity<Collection<Movie>> getMoviesToRate() {
        return ResponseEntity.of(Optional.of(movieRepository.getAllMovies()));
    }

}
