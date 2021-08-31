package com.stephenalexander.projects.moviecollection;

import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class Tester {
    private final MovieRepository movieRepository;
    private final RatingRepository ratingRepository;

    @Autowired
    public Tester(MovieRepository movieRepository, RatingRepository ratingRepository) {
        this.movieRepository = movieRepository;
        this.ratingRepository = ratingRepository;
    }
}
