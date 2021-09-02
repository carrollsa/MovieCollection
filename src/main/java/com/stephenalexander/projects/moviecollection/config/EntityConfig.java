package com.stephenalexander.projects.moviecollection.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EntityScan(basePackages = { "com.stephenalexander.projects.moviecollection.entity" })
public class EntityConfig {
}
