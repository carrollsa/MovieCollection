package com.stephenalexander.projects.moviecollection.springboottest;

import com.stephenalexander.projects.moviecollection.service.SystemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

//TODO: Figure out testing... This fails with a null pointer. systemRepository is null -- Spring + Tests?
public class SpringcloudrdsApplicationTests {
    @Autowired
    private SystemRepository systemRepository;

    @Test
    void testCurrentDate() {
        String currentDate = systemRepository.getCurrentDate();
        System.out.println("currentDate "+currentDate);
    }
}
