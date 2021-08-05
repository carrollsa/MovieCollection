package com.stephenalexander.projects.moviecollection.rating;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long> {
    public Optional<Rating> findByMovieId(int movieId);
}
