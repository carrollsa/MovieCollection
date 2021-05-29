package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.obsolete.RecommendationEngine;
import com.stephenalexander.projects.movierecommender.obsolete.rater.RaterDatabase;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class RecommendationEngineTest {

    private MovieDatabase movieDatabase;
    private RaterDatabase raterDatabase;
    private RecommendationEngine recommendationEngine;

    @BeforeEach
    public void beforeEach() {
        movieDatabase = new MovieDatabase();
        movieDatabase.initialize();
        raterDatabase = new RaterDatabase();
        raterDatabase.initialize("ratings.csv");
        recommendationEngine = new RecommendationEngine(raterDatabase, movieDatabase);
    }

    @Test
    public void test_getMoviesToRate() {
        List<Movie> moviesToRate = recommendationEngine.getMoviesToRate();
        assertEquals(17, moviesToRate.size());
    }
}