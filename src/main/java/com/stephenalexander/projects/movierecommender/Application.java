package com.stephenalexander.projects.movierecommender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

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
