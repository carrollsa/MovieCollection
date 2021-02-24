package com.stephenalexander.projects.movierecommender.filter;

import com.stephenalexander.projects.movierecommender.movie.MovieDatabase;

public class YearAfterFilter implements Filter {
	private int myYear;
	private final MovieDatabase movieDatabase;

	public YearAfterFilter(int year, MovieDatabase movieDatabase) {
		myYear = year;
		this.movieDatabase = movieDatabase;
	}
	
	@Override
	public boolean satisfies(String id) {
		return movieDatabase.getYear(id) >= myYear;
	}

}
