package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rating.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Controller
public class TestController {


    private final MovieRepository movieRepository;
    private final RaterRepository raterRepository;
    private final RatingRepository ratingRepository;

    @Autowired
    public TestController(MovieRepository movieRepository, RaterRepository raterRepository,
                          RatingRepository ratingRepository) {
        this.movieRepository = movieRepository;
        this.raterRepository = raterRepository;
        this.ratingRepository = ratingRepository;
    }

    @GetMapping(value = "/test")
    public String getIndex() {
        return "test_index.html";
    }

    @GetMapping(value = "/test", headers = {"content-type=text/json"})
    public ResponseEntity<Collection<Movie>> getTopFifteen() {
        return ResponseEntity.of(Optional.of(movieRepository.getTopMovies()));
    }

    @PostMapping(value = "/test", headers = {"content-type=text/json"})
    public void addRater() {

    }
}
