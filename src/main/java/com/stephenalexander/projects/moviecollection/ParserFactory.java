package com.stephenalexander.projects.movierecommender;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;

import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

public class ParserFactory {
    public CSVParser getParser (String filename) {
        final URL resource = this.getClass().getResource(filename);
        if (resource == null) {
            throw new RuntimeException("File not found: " + filename);
        }
        try {
            URI resourceURI = resource.toURI();
            File file = new File(resourceURI);
            Reader reader = new BufferedReader(new FileReader(file));
            return CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(reader);
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

}
