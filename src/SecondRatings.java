
import java.util.*;

public class SecondRatings {
    private ArrayList<Movie> myMovies;
    private ArrayList<EfficientRater> myRaters;
    
    public SecondRatings() {
        // default constructor
        this("ratedmoviesfull.csv", "ratings.csv");
    }
    public SecondRatings(String moviefile, String ratingsfile) {
        FirstRatings first = new FirstRatings();
        myMovies = first.loadMovies(moviefile);
        myRaters = first.loadRaters(ratingsfile);
    }
    public int getMovieSize() {
        return myMovies.size();
    }
    public int getRaterSize() {
        return myRaters.size();
    }
    public double getAverageByID(String id, int minimalRaters) {
        double average = 0.0;
        double numRatings = 0.0;
        double ratingTotal = 0.0;
        Movie target;
        for (int k=0; k<myMovies.size(); k++) {
            Movie m = myMovies.get(k);
            if (m.getID().equals(id)) {
                target = m;
            }
        }
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
    public ArrayList<Rating> getAverageRatings(int minimalRaters) {
        ArrayList<Rating> ratings = new ArrayList<Rating>();
        for (int k = 0; k < myMovies.size(); k++) {
            Movie m = myMovies.get(k);
            String id = m.getID();
            double avg = getAverageByID(id, minimalRaters);
            if (avg > 0) {
                Rating r = new Rating(id, avg);
                ratings.add(r);
            }
        }
        return ratings;
    }
    public String getTitle(String id) {
        for (int k=0;k<myMovies.size();k++) {
            Movie m = myMovies.get(k);
            if (m.getID().equals(id)){
                return m.getTitle();
            }
        }
        return "ID not found";
    }
    public String getID(String title) {
        for (int k=0;k<myMovies.size();k++) {
            Movie m = myMovies.get(k);
            if (m.getTitle().equals(title)){
                return m.getID();
            }
        }
        return "NO SUCH TITLE";
    }
}
