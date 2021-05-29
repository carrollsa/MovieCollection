package com.stephenalexander.projects.movierecommender.filter;

public class MinutesFilter implements Filter {
    private int myMin;
    private int myMax;
    private final MovieDatabase movieDatabase;
    
    public MinutesFilter(int min, int max, MovieDatabase movieDatabase) {
        myMin = min;
        myMax = max;
        this.movieDatabase = movieDatabase;
    }
    
    @Override
    public boolean satisfies(String id) {
        int length = movieDatabase.getMinutes(id);
        return length >= myMin && length <= myMax;
    }

}
