import edu.duke.*;
import java.util.*;
import org.apache.commons.csv.*;
public class MovieRunnerWithFilter {
    public void printAverageRatings() {
        //String moviefile = "data/ratedmovies_short.csv";
        //String moviefile = "data/ratedmoviesfull.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        String ratingsfile = "data/ratings.csv";
        //String ratingsfile = "data/ratings.csv";
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        YearAfterFilter yf = new YearAfterFilter(2000);
        //AllFilters af = new AllFilters();
        //af.addFilter(yf);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        //System.out.println(sr.getAverageByID("1798709", 0));
        int minRatings = 1;
        ArrayList<Rating> ratings = tr.getAverageRatings(minRatings);
        System.out.println("Number of movies with at least " + minRatings + " ratings: " + ratings.size());
        Collections.sort(ratings);
        for (int k = 0; k<ratings.size();k++) {
            Rating r = ratings.get(k);
            String id = r.getItem();
            System.out.println(MovieDatabase.getTitle(id) + ", " + r.getValue());
            //System.out.println(id);
            //System.out.println(MovieDatabase.getGenres(id));
            System.out.println(MovieDatabase.getDirector(id));
        }
    }
    public void printAverageRatingsByYear() {
        MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        YearAfterFilter yf = new YearAfterFilter(2000);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = tr.getAverageRatingsByFilter(1, yf);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        System.out.println("Found " + ratingList.size() + " movies");
        for (int k = 0; k<ratingList.size(); k++) {
            Rating r = ratingList.get(k);
            String id = r.getItem();
            System.out.println(r.getValue() + " " + MovieDatabase.getYear(id) + " " + MovieDatabase.getTitle(id));
        }
    }
    public void printAverageRatingsByGenre() {
        MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        GenreFilter gf = new GenreFilter("Crime");
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = tr.getAverageRatingsByFilter(1, gf);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        System.out.println("Found " + ratingList.size() + " movies");
        for (int k = 0; k<ratingList.size(); k++) {
            Rating r = ratingList.get(k);
            String id = r.getItem();
            System.out.println(r.getValue() + " " + MovieDatabase.getTitle(id));
            System.out.println("    " + MovieDatabase.getGenres(id));
        }
    }
    public void printAverageRatingsByMinutes() {
        MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        MinutesFilter mf = new MinutesFilter(110, 170);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = tr.getAverageRatingsByFilter(1, mf);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        System.out.println("Found " + ratingList.size() + " movies");
        for (int k = 0; k<ratingList.size(); k++) {
            Rating r = ratingList.get(k);
            String id = r.getItem();
            System.out.println(r.getValue() + " " + "Time: " + MovieDatabase.getMinutes(id) + " " + MovieDatabase.getTitle(id));
        }
    }
    public void printAverageRatingsByDirectors() {
        MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        //MovieDatabase.initialize("ratedmovies_short.csv");
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        DirectorsFilter df = new DirectorsFilter("Charles Chaplin,Michael Mann,Spike Jonze");
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = tr.getAverageRatingsByFilter(1, df);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        System.out.println("Found " + ratingList.size() + " movies");
        for (int k = 0; k<ratingList.size(); k++) {
            Rating r = ratingList.get(k);
            String id = r.getItem();
            System.out.println(r.getValue() + " " + MovieDatabase.getTitle(id));
            System.out.println("    " + MovieDatabase.getDirector(id));
        }
    }
    public void printAverageRatingByYearAfterAndGenre () {
        MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        //MovieDatabase.initialize("ratedmovies_short.csv");
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        AllFilters af = new AllFilters();
        YearAfterFilter yf = new YearAfterFilter(1980);
        GenreFilter gf = new GenreFilter("Romance");
        af.addFilter(yf);
        af.addFilter(gf);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = tr.getAverageRatingsByFilter(1, af);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        if (ratingList.size() == 1) {
            System.out.println(ratingList.size() + " movie matched");
        }
        else {
            System.out.println(ratingList.size() + " movies matched");
        }
        for (int k = 0; k<ratingList.size(); k++) {
            Rating r = ratingList.get(k);
            String id = r.getItem();
            System.out.println(r.getValue() + " " + MovieDatabase.getYear(id) + " " + MovieDatabase.getTitle(id));
            System.out.println("    " + MovieDatabase.getGenres(id));
        }
    }
    public void printAverageRatingsByDirectorsAndMinutes() {
        MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        //MovieDatabase.initialize("ratedmovies_short.csv");
        ThirdRatings tr = new ThirdRatings(ratingsfile);
        AllFilters af = new AllFilters();
        DirectorsFilter df = new DirectorsFilter("Charles Chaplin,Michael Mann,Spike Jonze,Francis Ford Coppola");
        MinutesFilter mf = new MinutesFilter(30, 170);
        af.addFilter(mf);
        af.addFilter(df);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = tr.getAverageRatingsByFilter(1, af);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + tr.getRaterSize());
        System.out.println("Number of movies: " + MovieDatabase.size());
        System.out.println("Found " + ratingList.size() + " movies");
        if (ratingList.size() == 1) {
            System.out.println(ratingList.size() + " movie matched");
        }
        else {
            System.out.println(ratingList.size() + " movies matched");
        }
        for (int k = 0; k<ratingList.size(); k++) {
            Rating r = ratingList.get(k);
            String id = r.getItem();
            System.out.println(r.getValue() + " " + MovieDatabase.getMinutes(id) + " " + MovieDatabase.getTitle(id));
            System.out.println("    " + MovieDatabase.getDirector(id));
        }
    }
}
