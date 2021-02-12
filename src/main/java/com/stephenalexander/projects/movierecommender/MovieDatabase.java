package com.stephenalexander.projects.movierecommender;

import com.stephenalexander.projects.movierecommender.filter.Filter;
import com.stephenalexander.projects.movierecommender.model.Movie;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MovieDatabase {
    private Map<String, Movie> ourMovies;
    public void initialize(String moviefile) {
        if (ourMovies == null) {
            ourMovies = new HashMap<>();
            loadMovies(moviefile);
        }
    }

    public void initialize() {
        if (ourMovies == null) {
            ourMovies = new HashMap<>();
            loadMovies("ratedmoviesfull.csv");
        }
    }	

	
    private void loadMovies(String filename) {
        InitializeDatabases fr = new InitializeDatabases();
        List<Movie> list = fr.loadMovies(filename);
        for (Movie m : list) {
            ourMovies.put(m.getID(), m);
        }
    }

    public boolean containsID(String id) {
        initialize();
        return ourMovies.containsKey(id);
    }

    public int getYear(String id) {
        initialize();
        return ourMovies.get(id).getYear();
    }

    public String getGenres(String id) {
        initialize();
        return ourMovies.get(id).getGenres();
    }

    public String getTitle(String id) {
        initialize();
        return ourMovies.get(id).getTitle();
    }

    public Movie getMovie(String id) {
        initialize();
        return ourMovies.get(id);
    }

    public String getPoster(String id) {
        initialize();
        return ourMovies.get(id).getPoster();
    }

    public int getMinutes(String id) {
        initialize();
        return ourMovies.get(id).getMinutes();
    }

    public String getCountry(String id) {
        initialize();
        return ourMovies.get(id).getCountry();
    }

    public String getDirector(String id) {
        initialize();
        return ourMovies.get(id).getDirector();
    }

    public int size() {
        return ourMovies.size();
    }

    public List<Movie> getAllMovies() {
        return new ArrayList<>(ourMovies.values());
    }

    public List<String> filterBy(Filter f) {
        initialize();
        List<String> list = new ArrayList<>();
        for(String id : ourMovies.keySet()) {
            if (f.satisfies(id)) {
                list.add(id);
            }
        }
        
        return list;
    }

}
