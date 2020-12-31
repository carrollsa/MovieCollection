
import java.util.*;

public class ThirdRatings {
    private ArrayList<EfficientRater> myRaters;
    
    public ThirdRatings() {
        this("ratings.csv");
    }
    public ThirdRatings(String ratingsfile) {
        FirstRatings first = new FirstRatings();
        myRaters = first.loadRaters(ratingsfile);
    }
    public ArrayList<Rating> getAverageRatings(int minimalRaters) {
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratings = new ArrayList<Rating>();
        for (int k = 0; k < movies.size(); k++) {
            String id = movies.get(k);
            double avg = getAverageByID(id, minimalRaters);
            if (avg > 0) {
                Rating r = new Rating(id, avg);
                ratings.add(r);
            }
        }
        return ratings;
    }
    public int getRaterSize() {
        return myRaters.size();
    }
    public double getAverageByID(String id, int minimalRaters) {
        double average = 0.0;
        double numRatings = 0.0;
        double ratingTotal = 0.0;
        Movie target;
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        // for (int k=0; k<movies.size(); k++) {
            // String mID = movies.get(k);
            // if (mID.equals(id)) {
                // target = m;
            // }
        // }
        for (int i=0;i<myRaters.size();i++) {
            EfficientRater r = myRaters.get(i);
            if (r.hasRating(id)) {
                numRatings ++;
                ratingTotal += r.getRating(id);
            }
            // ArrayList<String> itemsRated = r.getItemsRated();
            // for (int k = 0; k < itemsRated.size(); k++) {
                // if (id.equals(itemsRated.get(k))) {
                    // System.out.println(itemsRated.get(k));
                    // numRatings ++;
                    
                // }
            // }
        }
        if (numRatings < minimalRaters) {
            return 0.0;
        }
        
        return ratingTotal/numRatings;
    }
    public ArrayList<Rating> getAverageRatingsByFilter(int minimalRaters, Filter filterCriteria) {
        ArrayList<String> movieIDs = MovieDatabase.filterBy(filterCriteria);
        ArrayList<Rating> answer = new ArrayList<Rating>();
        for (int k = 0; k < movieIDs.size(); k++) {
            String id = movieIDs.get(k);
            double avg = getAverageByID(id, minimalRaters);
            if (avg > 0) {
                Rating r = new Rating(id, avg);
                answer.add(r);
            }
        }
        return answer;
    }
}
