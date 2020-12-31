import java.util.*;

public interface Rater {
    public void addRating(String item, double rating);

    public boolean hasRating(String item);

    public String getID();
    
    public String toString(PlainRater r);
    
    public double getRating(String item);

    public int numRatings() ;
    
    // public int hashCode() {
        // Rater r = new Rater(myID);
        // String rString = r.toString();
        // myHash = rString.hashCode();
        // return myHash;
    // }
    
    public ArrayList<String> getItemsRated();
}
