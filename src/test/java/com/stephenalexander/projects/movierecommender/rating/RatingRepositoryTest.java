package com.stephenalexander.projects.movierecommender.rating;

import org.hibernate.SessionFactory;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@DisplayName("RatingRepository")
class RatingRepositoryTest {

    @Autowired
    private RatingRepository testRatingRepository;

    @Test
    @Transactional
    @DisplayName("should return a rating by ratingId")
    void shouldReturnARatingByRatingId() {
        // given
        Rating rating = new Rating(
                29581032,
                5.0
        );
        testRatingRepository.save(rating);

        // when
        Optional<Rating> databaseRating = testRatingRepository.findByMovieId(29581032);

        // then
        assertThat(databaseRating.isPresent()).isTrue();
    }

    @Test
    @Transactional
    @DisplayName("should return a rating by raterId and movieId")
    void shouldReturnARaterIdAndMovieId() {
        // given
        Rating rating = new Rating(
                29581032,
                5.0
        );
        rating.setId(1L);
        testRatingRepository.save(rating);


        // when
        Optional<Rating> databaseRating = testRatingRepository.findByRaterIdAndMovieId(1L, 29581032);

        // then
        assertThat(databaseRating.isPresent()).isTrue();
    }


}