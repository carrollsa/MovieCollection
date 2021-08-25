package com.stephenalexander.projects.moviecollection;

import com.stephenalexander.projects.moviecollection.movie.MovieRepository;
import com.stephenalexander.projects.moviecollection.movie.MovieService;
import com.stephenalexander.projects.moviecollection.rater.RaterRepository;
import com.stephenalexander.projects.moviecollection.rater.RaterService;
import com.stephenalexander.projects.moviecollection.rating.RatingRepository;
import com.stephenalexander.projects.moviecollection.rating.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private RaterRepository raterRepository;
    @Autowired
    private MovieService movieService;
    @Autowired
    private RatingService ratingService;
    @Autowired
    private RaterService raterService;

    @Bean
    public ParserFactory parserFactory() {
        return new ParserFactory();
    }
}