package com.stephenalexander.projects.movierecommender.rater;

import com.stephenalexander.projects.movierecommender.movie.Movie;
import com.stephenalexander.projects.movierecommender.rating.Rating;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

//TODO: Fix SQL
@Repository
public interface RaterRepository extends CrudRepository<Rater, Long> {
    @Query(value = "SELECT * FROM rater LIMIT 15", nativeQuery = true)
    Set<Rater> getTopRaters();
    //First method using indexing from https://www.baeldung.com/spring-data-jpa-query
//    @Query("SELECT rating_value FROM rating r WHERE r.ratingid = ?1 and r.movieid = ?2")
//    public Optional<Rating> findRatingByRaterIdAndMovieId(long raterId, int movieId);

    //Second method using params
//    @Query("SELECT rating_value FROM rating r WHERE r.ratingid = :raterid and r.movieid = :movieid")
//    public Rating findRatingByRaterIdAndMovieIdParams(
//            @Param("raterid") long raterId,
//            @Param("movieid") int movieId);


}

