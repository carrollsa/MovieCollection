package com.stephenalexander.projects.moviecollection.movie;

import com.stephenalexander.projects.moviecollection.rating.RatingRepository;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@DisplayName("MovieRepository")
class MovieRepositoryTest {

    @Autowired
    private MovieRepository movieRepository;

    @Test
    @Disabled
    @Transactional
    @DisplayName("should return a list of movies by title")
    void shouldReturnARatingByRatingId() {
        String title = "El leaving";
        List<Movie> movieList = movieRepository.findByTitle(title);
        assertEquals(movieList, new Movie());
    }
}