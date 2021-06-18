package com.stephenalexander.projects.movierecommender.raters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RaterService {

    @Autowired
    private RaterRepository raterRepository;

    //Made this class to implement findRaterById, not knowing it was already there through repository annotation and
    // spring magic
}
