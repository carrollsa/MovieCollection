package com.stephenalexander.projects.moviecollection.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({ "com.stephenalexander.projects.moviecollection.repository" })
public class PersistenceConfig {
}
