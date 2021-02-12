package com.stephenalexander.projects.movierecommender.filter;

import com.stephenalexander.projects.movierecommender.MovieDatabase;

public class GenreFilter implements Filter {
    private String myGenre;
    private final MovieDatabase movieDatabase;

    public GenreFilter(String genre, MovieDatabase movieDatabase) {
        myGenre = genre;
        this.movieDatabase = movieDatabase;
    }
    
    @Override
    public boolean satisfies(String id) {
        if (movieDatabase.getGenres(id).indexOf(myGenre) != -1) {
            return true;
        }
        return false;
    }

}

