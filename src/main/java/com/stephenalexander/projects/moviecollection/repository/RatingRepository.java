package com.stephenalexander.projects.moviecollection.repository;

import com.stephenalexander.projects.moviecollection.entity.Rating;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long> {
    public Optional<Rating> findByMovieId(String movieId);

    public Optional<Rating> findByMovieIdAndRaterId(String movieId, Long raterId);

//    @Query(value=
//            "INSERT INTO rating(movie_id, rating) " +
//            "VALUES(:movieId, :ratingValue) " +
//                    "ON CONFLICT (movie_id) " +
//                    "DO UPDATE SET rating = :rating")
//    public void saveOrUpdate(String movieId, double ratingValue);

    @Query(value = "SELECT * FROM rating r " +
            "       WHERE r.rater_id = 1 " +
            "       ORDER BY r.rating DESC",
            nativeQuery = true)
    List<Rating> getTopRatings();
}