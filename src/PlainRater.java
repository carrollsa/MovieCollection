import java.util.*;

public class PlainRater implements Rater{
    private String myID;
    private ArrayList<Rating> myRatings;
    private int myHash;

    public PlainRater(String id) {
        myID = id;
        myRatings = new ArrayList<Rating>();
    }

    public void addRating(String item, double rating) {
        myRatings.add(new Rating(item,rating));
    }

    public boolean hasRating(String item) {
        for(int k=0; k < myRatings.size(); k++){
            if (myRatings.get(k).getItem().equals(item)){
                return true;
            }
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
        for(int k=0; k < myRatings.size(); k++){
            if (myRatings.get(k).getItem().equals(item)){
                return myRatings.get(k).getValue();
            }
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
    
    public ArrayList<String> getItemsRated() {
        ArrayList<String> list = new ArrayList<String>();
        for(int k=0; k < myRatings.size(); k++){
            list.add(myRatings.get(k).getItem());
        }
        
        return list;
    }
}
