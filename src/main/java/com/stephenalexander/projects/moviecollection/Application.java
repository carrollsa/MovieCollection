package com.stephenalexander.projects.moviecollection;

import com.sun.xml.bind.v2.runtime.output.SAXOutput;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.session.jdbc.config.annotation.web.http.EnableJdbcHttpSession;

import java.io.File;

@EnableAutoConfiguration
@EnableJpaRepositories
@SpringBootApplication
@EnableJdbcHttpSession
@ComponentScan(basePackages = { "com.stephenalexander.projects.moviecollection" })
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }



}
