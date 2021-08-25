package com.stephenalexander.projects.moviecollection.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("api/v1/movies")
@RestController
public class MovieController {

    private final MovieRepository movieRepository;
    private final MovieService movieService;

    @Autowired
    public MovieController(MovieRepository movieRepository, MovieService movieService) {
        this.movieRepository = movieRepository;
        this.movieService = movieService;
    }

//    @GetMapping
//    @ResponseBody
//    public ResponseEntity<List<Movie>> findMoviesByTitle(@RequestParam String title) {
//        List<Movie> movies = movieService.findByTitle(title).orElseGet(ArrayList::new);
//        System.out.println(movies);
//        return ResponseEntity.of(Optional.of((movies)));
//    }

    @GetMapping
    @ResponseBody
    public ResponseEntity<Optional<List<Movie>>> findMoviesByTitle(@RequestParam String title) {
        return ResponseEntity.of(Optional.of(movieService.findByTitleSnippet(title)));
    }
}
