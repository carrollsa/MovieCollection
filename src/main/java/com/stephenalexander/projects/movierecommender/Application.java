package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.MovieDatabase;
import com.stephenalexander.projects.movierecommender.rater.RaterDatabase;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;

@EnableAutoConfiguration
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
