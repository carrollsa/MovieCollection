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

    Movie findById(String id);

    List<Movie> findByTitleStartingWith(String title);

    List<Movie> findByTitle(String title);

    @Query(value = "SELECT * FROM movie m WHERE lower(m.title) LIKE LOWER('%' || :title || '%')" +
            " ORDER BY LENGTH(m.title) ASC " +
            "LIMIT 10000",
            nativeQuery = true)
    List<Movie> findByTitleSnippet(
            @Param("title") String title);
}

