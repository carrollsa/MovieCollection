package com.stephenalexander.projects.movierecommender.rating;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long> {
    public Optional<Rating> findByMovieId(int movieId);

    public Optional<Rating> findByRaterIdAndMovieId(long raterId, int movieId);
}
