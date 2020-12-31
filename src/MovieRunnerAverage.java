import edu.duke.*;
import java.util.*;
import org.apache.commons.csv.*;
public class MovieRunnerAverage {
    public void printAverageRatings() {
        //String moviefile = "data/ratedmovies_short.csv";
        String moviefile = "data/ratedmoviesfull.csv";
        //String ratingsfile = "data/ratings_short.csv";
        String ratingsfile = "data/ratings.csv";
        SecondRatings sr = new SecondRatings(moviefile, ratingsfile);
        System.out.println("Number of movies: " + sr.getMovieSize());
        System.out.println("Number of raters: " + sr.getRaterSize());
        //System.out.println(sr.getAverageByID("1798709", 0));
        ArrayList<Rating> ratings = sr.getAverageRatings(3);
        Collections.sort(ratings);
        for (int k = 0; k<ratings.size();k++) {
            Rating r = ratings.get(k);
            String id = r.getItem();
            System.out.println(sr.getTitle(id) + ", " + r.getValue());
        }
        System.out.println(sr.getID("The Godfather"));
    }
    public void getAverageRatingOneMovie() {
        //String moviefile = "data/ratedmovies_short.csv";
        String moviefile = "data/ratedmoviesfull.csv";
        //String ratingsfile = "data/ratings_short.csv";
        String ratingsfile = "data/ratings.csv";
        SecondRatings sr = new SecondRatings(moviefile, ratingsfile);
        String title = "The Godfather";
        String id = sr.getID(title);
        System.out.println("Average rating of " + title + " is: " + sr.getAverageByID(id, 0));
    }
    public void thirdRatingsTest() {
        //String moviefile = "data/ratedmovies_short.csv";
        String moviefile = "data/ratedmoviesfull.csv";
        //String ratingsfile = "data/ratings_short.csv";
        String ratingsfile = "data/ratings.csv";
        ThirdRatings sr = new ThirdRatings(ratingsfile);
        String title = "The Godfather";
        SecondRatings sr2 = new SecondRatings(moviefile, ratingsfile); 
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        String id = sr2.getID(title);
        System.out.println("Average rating of " + title + " is: " + sr.getAverageByID(id, 0));
    }
}
