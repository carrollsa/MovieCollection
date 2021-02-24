package com.stephenalexander.projects.movierecommender.rater;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class EfficientRater implements Rater {
    private String myID;
    private Map<String, Rating> myRatings;
    private int myHash;

    public EfficientRater(String id) {
        myID = id;
        myRatings = new HashMap<>();
    }

    public void addRating(String mID, double rating) {
        Rating r = new Rating(mID, rating);
        myRatings.put(mID,r);
        // for (String id : myRatings.keySet()) {
            // if (!myRatings.containsKey(mID)){
                // myRatings.put(mID, r);
            // }
            // else {
                // myRatings.put(myRatings.get(mID), myRatings.get(mID) + r);
            // }
        // }
    }

    public boolean hasRating(String item) {
        if (myRatings.containsKey(item)) {
            return true;
        }
        return false;
    }

    public String getID() {
        return myID;
    }
    
    public String toString(PlainRater r) {
        return r.getID().toString();
    }
    
    public double getRating(String item) {
        if (myRatings.containsKey(item)) {
            Rating r = myRatings.get(item);
            return r.getValue();
        }
        return -1;
    }

    public int numRatings() {
        return myRatings.size();
    }
    
    // public int hashCode() {
        // Rater r = new Rater(myID);
        // String rString = r.toString();
        // myHash = rString.hashCode();
        // return myHash;
    // }
    
    public List<String> getItemsRated() {
        List<String> list = new ArrayList<>();
        for(String r : myRatings.keySet()){
            list.add(r);
        }
        
        return list;
    }
}
