package com.stephenalexander.projects.moviecollection;

import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.service.MovieService;
import com.stephenalexander.projects.moviecollection.repository.RaterRepository;
import com.stephenalexander.projects.moviecollection.service.RaterService;
import com.stephenalexander.projects.moviecollection.repository.RatingRepository;
import com.stephenalexander.projects.moviecollection.service.RatingService;
import com.stephenalexander.projects.moviecollection.repository.RoleRepository;
import com.stephenalexander.projects.moviecollection.repository.UserRepository;
import com.stephenalexander.projects.moviecollection.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class Config {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private RaterRepository raterRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private MovieService movieService;
    @Autowired
    private RatingService ratingService;
    @Autowired
    private RaterService raterService;
    @Autowired
    private UserService userService;

    @Bean
    public ParserFactory parserFactory() {
        return new ParserFactory();
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }
}