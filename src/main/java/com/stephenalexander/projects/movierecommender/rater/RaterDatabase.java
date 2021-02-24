package com.stephenalexander.projects.movierecommender.rater;

import com.stephenalexander.projects.movierecommender.InitializeDatabases;
import com.stephenalexander.projects.movierecommender.rater.EfficientRater;
import com.stephenalexander.projects.movierecommender.rater.Rater;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class RaterDatabase {
    private Map<String, Rater> ourRaters;
     
    private void initialize() {
        // this method is only called from addRatings 
        if (ourRaters == null) {
            ourRaters = new HashMap<>();
        }
    }

    public void initialize(String filename) {
        if (ourRaters == null) {
            ourRaters= new HashMap<>();
            addRatings(filename);
        }
    }   
    
    public void addRatings(String filename) {
        initialize();
        CSVParser parser = getCSVParser(filename);
        for(CSVRecord rec : parser) {
            String id = rec.get("rater_id");
            String item = rec.get("movie_id");
            String rating = rec.get("rating");
            addRaterRating(id,item,Double.parseDouble(rating));
        } 
    }
    
    public void addRaterRating(String raterID, String movieID, double rating) {
        initialize(); 
        Rater rater =  null;
        if (ourRaters.containsKey(raterID)) {
            rater = ourRaters.get(raterID); 
        } 
        else { 
            rater = new EfficientRater(raterID);
            ourRaters.put(raterID,rater);
        }
        rater.addRating(movieID,rating);
    } 
             
    public Rater getRater(String id) {
        initialize();
        
        return ourRaters.get(id);
    }
    
    public ArrayList<Rater> getRaters() {
        initialize();
        ArrayList<Rater> list = new ArrayList<Rater>(ourRaters.values());
        
        return list;
    }
 
    public int size() {
        return ourRaters.size();
    }

    private CSVParser getCSVParser(String filename) {
        final URL resource = InitializeDatabases.class.getResource(filename);
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
