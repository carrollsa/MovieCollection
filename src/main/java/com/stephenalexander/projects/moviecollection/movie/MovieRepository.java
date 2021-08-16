package com.stephenalexander.projects.moviecollection.movie;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

    @Query(value = "SELECT * FROM movies", nativeQuery = true)
    Set<Movie> getAllMovies();

//    @Query(value = "SELECT movie_id, title, year, runningtime FROM movie m WHERE m.movie_id = :id")
//    Movie

    Movie findById(String id);

    List<Movie> findByTitleStartingWith(String title);

    List<Movie> findByTitle(String title);

    @Query(value = "SELECT * FROM movie m WHERE lower(m.title) LIKE '%' || :title || '%' ORDER BY m.year DESC LIMIT " +
            "10000",
            nativeQuery = true)
    List<Movie> findByTitleSnippet(
            @Param("title") String title);
}

