package com.stephenalexander.projects.moviecollection.repository;

import com.stephenalexander.projects.moviecollection.entity.Rating;
import com.stephenalexander.projects.moviecollection.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long> {
    public Optional<Rating> findByMovieId(String movieId);

    public Optional<Rating> findByMovieIdAndUserId(String movieId, Long userId);

//    @Query(value=
//            "INSERT INTO rating(movie_id, rating) " +
//            "VALUES(:movieId, :ratingValue) " +
//                    "ON CONFLICT (movie_id) " +
//                    "DO UPDATE SET rating = :rating")
//    public void saveOrUpdate(String movieId, double ratingValue);

//    @Query(value = "SELECT * FROM rating r " +
//            "       WHERE r.user_id = 1 " +
//            "       ORDER BY r.rating DESC",
//            nativeQuery = true)
//    List<Rating> getTopRatings();

    @Query(value = "SELECT * FROM rating r " +
            "       WHERE r.user_id = :userId " +
            "       ORDER BY r.rating DESC",
            nativeQuery = true)
    List<Rating> getUserRatings(Long userId);
}
