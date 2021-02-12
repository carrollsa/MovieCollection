package com.stephenalexander.projects.movierecommender;


import com.stephenalexander.projects.movierecommender.model.EfficientRater;
import com.stephenalexander.projects.movierecommender.model.Movie;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InitializeDatabasesTest {

    public static final Movie EXPECTED_FIRST_MOVIE = new Movie("0006414", "Behind the Screen", "1916", "Short, Comedy, Romance", "Charles Chaplin", "USA", "http://ia.media-imdb.com/images/M/MV5BMTkyNDYyNTczNF5BMl5BanBnXkFtZTgwMDU2MzAwMzE@._V1_SX300.jpg", 30
    );
    //public static final Movie EXPECTED_LAST_MOVIE = new Movie();
    private InitializeDatabases initializeDatabases;

    @BeforeEach
    public void beforeEach() {
       initializeDatabases = new InitializeDatabases();
    }

    @Test
    public void test_loadMovies() {
        List<Movie> movies = initializeDatabases.loadMovies("ratedmovies_short.csv");
        assertEquals(5, movies.size());
        assertEquals(EXPECTED_FIRST_MOVIE, movies.get(0));
        //Assertions.assertEquals(Expected_last_movie, movies.get(4)); //just for template. doesn't work
    }

    @Test
    public void test_loadRaters() {
        List<EfficientRater> raters = initializeDatabases.loadRaters("ratings_short.csv");
        assertEquals(5, raters.size());
    }
}