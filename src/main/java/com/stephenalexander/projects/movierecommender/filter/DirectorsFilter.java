package com.stephenalexander.projects.movierecommender.filter;

import com.stephenalexander.projects.movierecommender.movie.MovieDatabase;

public class DirectorsFilter implements Filter {
    private String myDirectors;
    private final MovieDatabase movieDatabase;

    public DirectorsFilter(String directors, MovieDatabase movieDatabase) {
        myDirectors = directors;
        this.movieDatabase = movieDatabase;
    }
    
    @Override
    public boolean satisfies(String id) {
        String movieDirectors = movieDatabase.getDirector(id);
        String[] directorArray = myDirectors.split("[,]", 0);
        for (String dir : directorArray) {
            if (movieDirectors.indexOf(dir) != -1) {
                return true;
            }
        }
        return false;
    }

}