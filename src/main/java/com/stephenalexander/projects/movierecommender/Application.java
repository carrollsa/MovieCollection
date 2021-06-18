package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rating.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@EnableAutoConfiguration
@EnableJpaRepositories
@SpringBootApplication
@EntityScan
@ComponentScan
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
