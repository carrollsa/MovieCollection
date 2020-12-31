import edu.duke.*;
import java.util.*;
import org.apache.commons.csv.*;
public class MovieRunnerSimilarRatings {
    public void printAverageRatings() {
        //String moviefile = "data/ratedmovies_short.csv";
        String moviefile = "data/ratedmoviesfull.csv";
        // MovieDatabase.initialize("ratedmovies_short.csv");
        String ratingsfile = "data/ratings_short.csv";
        //String ratingsfile = "data/ratings.csv";
        FourthRatings fr = new FourthRatings(ratingsfile);
        YearAfterFilter yf = new YearAfterFilter(2000);
        //AllFilters af = new AllFilters();
        //af.addFilter(yf);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        System.out.println("Number of raters: " + RaterDatabase.size());
        System.out.println("Number of movies: " + MovieDatabase.size());
        //System.out.println(sr.getAverageByID("1798709", 0));
        int minRatings = 5;
        ArrayList<Rating> ratings = fr.getAverageRatings(minRatings);
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

    public void printAverageRatingByYearAfterAndGenre () {
        //MovieDatabase.initialize("ratedmovies_short.csv");
        //String ratingsfile = "data/ratings_short.csv";
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        AllFilters af = new AllFilters();
        YearAfterFilter yf = new YearAfterFilter(1980);
        GenreFilter gf = new GenreFilter("Romance");
        af.addFilter(yf);
        af.addFilter(gf);
        ArrayList<String> movies = MovieDatabase.filterBy(new TrueFilter());
        ArrayList<Rating> ratingList = fr.getAverageRatingsByFilter(1, af);
        Collections.sort(ratingList);
        System.out.println("Number of raters: " + RaterDatabase.size());
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

    public void getSimilarRatings () {
        //MovieDatabase.initialize("ratedmovies_short.csv");
        //String ratingsfile = "data/ratings_short.csv";
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        // for (Rater r : RaterDatabase.getRaters()) {
        // System.out.println(r.getID());
        // }
        int mostRatings = 0;
        String mostRater = "";
        for (Rater r : RaterDatabase.getRaters()){
            int numRatings = r.numRatings();
            if (numRatings > mostRatings) {
                mostRatings = numRatings;
                mostRater = r.getID();
            }
        }
        System.out.println("Highest rater is " + mostRater + " with " + mostRatings + " ratings");
        ArrayList<Rating> sim = fr.getSimilarRatings("735", 10, 2);
        Rater r = RaterDatabase.getRater("735");
        ArrayList<String> rItems = r.getItemsRated();
        System.out.println(rItems.size());
        int count = 0;
        // for (String s : rItems) {
        // for (Rating rat : sim) {
        // String id = rat.getItem();
        // count += 1;
        // System.out.println(count);
        // if (id.equals(s)) {
        // System.out.println("MATCHED - " + MovieDatabase.getTitle(s));
        // }
        // else {
        // System.out.println("not matched - " + MovieDatabase.getTitle(id));
        // }
        // }

        // }
        System.out.println(sim.size());
        // for (Rating rat : sim) {
        // // System.out.println(rat.getItem());
        // String mID = rat.getItem();
        // System.out.println(MovieDatabase.getTitle(mID) + r.getRating(mID));

        // }
    }

    public void printSimilarRatings() {
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> sim = fr.getSimilarRatings("71", 20, 5);
        for (Rating mov : sim) {
            System.out.println(MovieDatabase.getTitle(mov.getItem()) + " - " + mov.getValue());
        }
    }

    public void printSimilarRatingsByGenre() {
        GenreFilter gf = new GenreFilter("Mystery");
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> sim = fr.getSimilarRatings("964", 20, 5);
        ArrayList<String> movies = MovieDatabase.filterBy(gf);
        for (int k=0; k<sim.size(); k++) {
            Rating r = sim.get(k);
            String movID = r.getItem();
            if (movies.contains(movID)){
                System.out.println(MovieDatabase.getTitle(movID) + " - " + r.getValue());
                System.out.println("\t" + MovieDatabase.getGenres(movID));
            }
        }
    }

    public void printSimilarRatingsByDirector() {
        DirectorsFilter df = new DirectorsFilter("Clint Eastwood,J.J. Abrams,Alfred Hitchcock,Sydney Pollack,David Cronenberg,Oliver Stone,Mike Leigh");
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> sim = fr.getSimilarRatings("120", 10, 2);
        ArrayList<String> movies = MovieDatabase.filterBy(df);
        for (int k=0; k<sim.size(); k++) {
            Rating r = sim.get(k);
            String movID = r.getItem();
            if (movies.contains(movID)){
                System.out.println(MovieDatabase.getTitle(movID) + " - " + r.getValue());
                System.out.println("\t" + MovieDatabase.getDirector(movID));
            }
        }
    }

    public void printSimilarGenreAndMinutes() {
        AllFilters af = new AllFilters();
        GenreFilter gf = new GenreFilter("Drama");
        MinutesFilter mf = new MinutesFilter(80, 160);
        af.addFilter(gf);
        af.addFilter(mf);
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> sim = fr.getSimilarRatings("168", 10, 3);
        ArrayList<String> movies = MovieDatabase.filterBy(af);
        for (int k=0; k<sim.size(); k++) {
            Rating r = sim.get(k);
            String movID = r.getItem();
            if (movies.contains(movID)){
                System.out.println(MovieDatabase.getTitle(movID) + " - " + MovieDatabase.getMinutes(movID) + " - " + r.getValue());
                System.out.println("\t" + MovieDatabase.getGenres(movID));
            }
        }
    }

    public void printSimilarRatingsByYearAfterAndMinutes() {
        AllFilters af = new AllFilters();
        YearAfterFilter yf = new YearAfterFilter(1975);
        MinutesFilter mf = new MinutesFilter(70, 200);
        af.addFilter(yf);
        af.addFilter(mf);
        String ratingsfile = "data/ratings.csv";
        MovieDatabase.initialize("ratedmoviesfull.csv");
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> sim = fr.getSimilarRatings("314", 10, 5);
        ArrayList<String> movies = MovieDatabase.filterBy(af);
        for (int k=0; k<sim.size(); k++) {
            Rating r = sim.get(k);
            String movID = r.getItem();
            if (movies.contains(movID)){
                System.out.println(MovieDatabase.getTitle(movID) + " - " + MovieDatabase.getYear(movID) +  " - " + MovieDatabase.getMinutes(movID) + " - " + r.getValue());
                //System.out.println("\t" + MovieDatabase.getGenres(movID));
            }
        }
    }
    public ArrayList<String> getItemsToRate() {
        ArrayList<String> list = new ArrayList<String>();;
        String moviefile = "data/ratedmoviesfull.csv";
        String ratingsfile = "data/ratings.csv";
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<String> genres = new ArrayList<String> ();
        int minRatings = 5;
        genres.add("Action"); genres.add("Thriller"); genres.add("Biography"); genres.add("Drama"); 
        genres.add("Comedy"); genres.add("Romance"); genres.add("Adventure"); genres.add("Animation");
        genres.add("Horror"); genres.add("Crime"); genres.add("Sci-Fi");
        genres.add("Sport"); genres.add("Music"); genres.add("Musical"); genres.add("Documentary");
        genres.add("History"); genres.add("Film-Noir"); genres.add("Fantasy");
        for (int k=0; k<genres.size(); k++) {
            MovieDatabase.initialize("ratedmoviesfull.csv");
            GenreFilter gf = new GenreFilter(genres.get(k));
            ArrayList<String> movies = MovieDatabase.filterBy(gf);
            ArrayList<Rating> ratings = fr.getAverageRatings(minRatings);
            Collections.sort(ratings,Collections.reverseOrder());
            for (Rating r : ratings) {
                String id = r.getItem();
                String tempGenre = MovieDatabase.getGenres(id);
                if (tempGenre.indexOf(genres.get(k)) != -1 && !list.contains(id)) {
                    System.out.println(genres.get(k) + " - " + id + " - " + MovieDatabase.getTitle(id) + " - " + r.getValue());
                    list.add(id);
                    break;
                }
            }
        }
        // for (int k=0; k<list.size();k++) {
        // System.out.println(list.get(k));
        // }
        return list;
    }
    public void bestFantasy() {
        String moviefile = "data/ratedmoviesfull.csv";
        String ratingsfile = "data/ratings.csv";
        GenreFilter gf = new GenreFilter("Fantasy");
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<String> movies = MovieDatabase.filterBy(gf);
        ArrayList<Rating> ratings = fr.getAverageRatings(5);
        Collections.sort(ratings,Collections.reverseOrder());
        for (Rating r : ratings) {
            String id = r.getItem();
            String tempGenre = MovieDatabase.getGenres(id);
            if (tempGenre.indexOf("Fantasy") != -1) {
                System.out.println(id + " - " + MovieDatabase.getGenres(id) + " - " + MovieDatabase.getTitle(id));
            }
        }
    }
    public void printRecommendationsFor() {
        String moviefile = "data/ratedmoviesfull.csv";
        String ratingsfile = "data/ratings.csv";
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> list = fr.getSimilarRatings("314", 10, 5);
        int maxResults = 15;
        if (list.isEmpty()) {
            System.out.println("Please rate more movies to provide recommendations!");
        }
        if (list.size() < maxResults) {
            maxResults = list.size();
        }
        for (int i=0; i<maxResults; i++) {
            String id = list.get(i).getItem();
            System.out.println((i+1) + ") " + MovieDatabase.getPoster(id) + " - " + MovieDatabase.getTitle(id) + 
            " - " + MovieDatabase.getGenres(id) + " - " + MovieDatabase.getDirector(id));
        }
    }
}

