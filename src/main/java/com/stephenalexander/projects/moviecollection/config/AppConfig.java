package com.stephenalexander.projects.moviecollection.config;

import com.stephenalexander.projects.moviecollection.ParserFactory;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.service.*;
import com.stephenalexander.projects.moviecollection.repository.RaterRepository;
import com.stephenalexander.projects.moviecollection.repository.RatingRepository;
import com.stephenalexander.projects.moviecollection.repository.RoleRepository;
import com.stephenalexander.projects.moviecollection.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AppConfig {

    @Bean
    public ParserFactory parserFactory() {
        return new ParserFactory();
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }

}