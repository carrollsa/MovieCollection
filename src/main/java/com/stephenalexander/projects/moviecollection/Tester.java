package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.MovieRepository;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import com.stephenalexander.projects.movierecommender.rater.RaterRepository;
import com.stephenalexander.projects.movierecommender.rating.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class Tester {
    private final RaterRepository raterRepository;
    private final MovieRepository movieRepository;
    private final RatingRepository ratingRepository;

    @Autowired
    public Tester(RaterRepository raterRepository, MovieRepository movieRepository,
                  RatingRepository ratingRepository) {
        this.raterRepository = raterRepository;
        this.movieRepository = movieRepository;
        this.ratingRepository = ratingRepository;
    }

    public void test() {
        Iterable<Rater> raters = raterRepository.findAll();
        for(Rater rater : raters) {
            System.out.println(rater.toString());
        }
    }
}
