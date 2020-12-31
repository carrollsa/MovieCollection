import java.util.*;

public class FourthRatings {

    public FourthRatings() {
        this("ratings.csv");
    }

    public FourthRatings(String ratingsfile) {
        RaterDatabase.addRatings(ratingsfile);
    }
    
    public double getAverageByID(String id, int minimalRaters) {
        double average = 0.0;
        double numRatings = 0.0;
        double ratingTotal = 0.0;
        Movie target;
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        for (Rater r : RaterDatabase.getRaters()) {
            if (r.hasRating(id)) {
                numRatings ++;
                ratingTotal += r.getRating(id);
            }
        }
        if (numRatings < minimalRaters) {
            return 0.0;
        }

        return ratingTotal/numRatings;
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
    private double dotProduct(Rater me, Rater r) {
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        double product = 0.0;
        for (String id : movies) {
            if (me.hasRating(id) && r.hasRating(id)) {
                //System.out.println("my rating: " + me.getRating(id));
                //System.out.println("their rating: " + r.getRating(id));
                double myRating = me.getRating(id) - 5;
                double theirRating = r.getRating(id) - 5;
                //System.out.println("Adding " + (myRating*theirRating) + " for movie: " + MovieDatabase.getTitle(id));
                product += myRating*theirRating;
            }
        }
        return product;
    }
    private ArrayList<Rating> getSimilarities(String id) {
        ArrayList<Rating> sim = new ArrayList<Rating>();
        Rater me = RaterDatabase.getRater(id);
        for (Rater r : RaterDatabase.getRaters()) {
            if (! r.getID().equals(id)) {
                double prod = dotProduct(me, r);
                if (prod >= 0) {
                    Rating rat = new Rating(r.getID(), prod);
                    sim.add(rat);
                }
            }
        }
        Collections.sort(sim, Collections.reverseOrder());
        // System.out.println(sim.size());
        // for (Rating rat : sim) {
            // System.out.println(rat.getItem() + " - " + rat.getValue());
        // }
        return sim;
    }
    public ArrayList<Rating> getSimilarRatings(String id, int numSimilarRaters, int minimalRaters) {
        ArrayList<Rating> simMovies = new ArrayList<Rating>();
        ArrayList<Rating> simRaters = getSimilarities(id);
        // for (Rating rat : simRaters) {
            // System.out.println(rat.getItem() + " - " + rat.getValue());
        // }
        // O(n^2)
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        for (String mID : movies) {
            double total = 0.0;
            int numRatings = 0;
            //System.out.println(MovieDatabase.getTitle(mID));
            for (int k=0; k<numSimilarRaters; k++) {
                //get similarityrating
                double similarityRating = simRaters.get(k).getValue();
                //get their id
                Rating temp = simRaters.get(k);
                String rID = temp.getItem();
                
                //get their rating of movie
                Rater rater = RaterDatabase.getRater(rID);
                double movieRating = rater.getRating(mID);
                //System.out.println(rID + " - " + similarityRating + " - " + movieRating);
                //calculate weighted average
                if (movieRating != -1.0 && similarityRating > -1.0) {
                    //System.out.println("Adding " + MovieDatabase.getTitle(mID));
                    double totalSim = similarityRating*movieRating;
                    //System.out.println("adding: " + totalSim + " to " + MovieDatabase.getTitle(mID));
                    total += totalSim;
                    numRatings += 1;
                }
            }
            if (numRatings >= minimalRaters) {
                //System.out.println(total);
                //System.out.println("total ratings: " + numRatings);
                double weightedAverage = total/numRatings;
                Rating r = new Rating(mID, weightedAverage);
                simMovies.add(r);
            }
        }
        Collections.sort(simMovies, Collections.reverseOrder());
        return simMovies;
    }
}
