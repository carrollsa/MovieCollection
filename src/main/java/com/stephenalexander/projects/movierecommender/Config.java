package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.obsolete.RecommendationEngine;
import com.stephenalexander.projects.movierecommender.obsolete.rater.RaterDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    public ParserFactory parserFactory() {
        return new ParserFactory();
    }

    @Bean
    public RecommendationEngine recommendationEngine(RaterDatabase raterDatabase, MovieDatabase movieDatabase) {
        return new RecommendationEngine(raterDatabase, movieDatabase);
    }

    @Bean
    public RaterDatabase raterDatabase() {
        RaterDatabase raterDatabase = new RaterDatabase();
        raterDatabase.initialize("ratings.csv");
        return raterDatabase;
    }

    @Bean
    public MovieDatabase movieDatabase() {
        MovieDatabase movieDatabase = new MovieDatabase();
        movieDatabase.initialize();
        return movieDatabase;
    }
}