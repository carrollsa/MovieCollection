package com.stephenalexander.projects.movierecommender.movie;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

//    @Query("SELECT movieId FROM Movie")
//    Set<Integer> getAllMovieIds();

    //TODO: Fix sql

    @Query(value = "SELECT * FROM Movie LIMIT 15", nativeQuery = true)
    Set<Movie> getTopMovies();

    @Query(value = "SELECT * FROM Movie", nativeQuery = true)
    Set<Movie> getAllMovies();

//    @Query("" +
//            "SELECT CASE WHEN COUNT(m) > 0 THEN " +
//            "TRUE ELSE FALSE END " +
//            "FROM movie m " +
//            "WHERE m.movieId = ?1"
//    )
//    Boolean selectExistsMovie(int movieId);
}

