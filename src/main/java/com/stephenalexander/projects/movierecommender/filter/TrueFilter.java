package com.stephenalexander.projects.movierecommender.filter;

public class TrueFilter implements Filter {
	@Override
	public boolean satisfies(String id) {
		return true;
	}

}
