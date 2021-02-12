package com.stephenalexander.projects.movierecommender.obsolete;

public class MovieRunnerSimilarRatings {

//    public void printAverageRatings() {
//        String moviefile = "data/ratedmoviesfull.csv";
//        String ratingsfile = "data/ratings_short.csv";
//        RecommendationEngine fr = new RecommendationEngine(ratingsfile, raterDatabase);
//        YearAfterFilter yf = new YearAfterFilter(2000);
//        List<String> movies = MovieDatabase.filterBy(new TrueFilter());
//        System.out.println("Number of raters: " + RaterDatabase.size());
//        System.out.println("Number of movies: " + MovieDatabase.size());
//        int minRatings = 5;
//        List<Rating> ratings = fr.getAverageRatings(minRatings);
//        System.out.println("Number of movies with at least " + minRatings + " ratings: " + ratings.size());
//        Collections.sort(ratings);
//        for (int k = 0; k<ratings.size();k++) {
//            Rating r = ratings.get(k);
//            String id = r.getItem();
//            System.out.println(MovieDatabase.getTitle(id) + ", " + r.getValue());
//            System.out.println(MovieDatabase.getDirector(id));
//        }
//    }
//
//    public void getSimilarRatings () {
//        String ratingsfile = "data/ratings.csv";
//        MovieDatabase.initialize("ratedmoviesfull.csv");
//        RecommendationEngine fr = new RecommendationEngine(ratingsfile, raterDatabase);
//        int mostRatings = 0;
//        String mostRater = "";
//        for (Rater r : RaterDatabase.getRaters()){
//            int numRatings = r.numRatings();
//            if (numRatings > mostRatings) {
//                mostRatings = numRatings;
//                mostRater = r.getID();
//            }
//        }
//        System.out.println("Highest rater is " + mostRater + " with " + mostRatings + " ratings");
//        List<Rating> sim = fr.getSimilarRatings("735", 10, 2);
//        Rater r = RaterDatabase.getRater("735");
//        List<String> rItems = r.getItemsRated();
//        System.out.println(rItems.size());
//        int count = 0;
//        System.out.println(sim.size());
//    }
//
//    public ArrayList<String> getItemsToRate() {
//        ArrayList<String> list = new ArrayList<String>();;
//        String moviefile = "data/ratedmoviesfull.csv";
//        String ratingsfile = "data/ratings.csv";
//        RecommendationEngine fr = new RecommendationEngine(ratingsfile, raterDatabase);
//        ArrayList<String> genres = new ArrayList<String> ();
//        int minRatings = 5;
//        genres.add("Action"); genres.add("Thriller"); genres.add("Biography"); genres.add("Drama");
//        genres.add("Comedy"); genres.add("Romance"); genres.add("Adventure"); genres.add("Animation");
//        genres.add("Horror"); genres.add("Crime"); genres.add("Sci-Fi");
//        genres.add("Sport"); genres.add("Music"); genres.add("Musical"); genres.add("Documentary");
//        genres.add("History"); genres.add("Film-Noir"); genres.add("Fantasy");
//        for (int k=0; k<genres.size(); k++) {
//            MovieDatabase.initialize("ratedmoviesfull.csv");
//            GenreFilter gf = new GenreFilter(genres.get(k));
//            List<String> movies = MovieDatabase.filterBy(gf);
//            List<Rating> ratings = fr.getAverageRatings(minRatings);
//            Collections.sort(ratings,Collections.reverseOrder());
//            for (Rating r : ratings) {
//                String id = r.getItem();
//                String tempGenre = MovieDatabase.getGenres(id);
//                if (tempGenre.indexOf(genres.get(k)) != -1 && !list.contains(id)) {
//                    System.out.println(genres.get(k) + " - " + id + " - " + MovieDatabase.getTitle(id) + " - " + r.getValue());
//                    list.add(id);
//                    break;
//                }
//            }
//        }
//        return list;
//    }
//    public void bestFantasy() {
//        String moviefile = "data/ratedmoviesfull.csv";
//        String ratingsfile = "data/ratings.csv";
//        GenreFilter gf = new GenreFilter("Fantasy");
//        RecommendationEngine fr = new RecommendationEngine(ratingsfile, raterDatabase);
//        List<String> movies = MovieDatabase.filterBy(gf);
//        List<Rating> ratings = fr.getAverageRatings(5);
//        Collections.sort(ratings,Collections.reverseOrder());
//        for (Rating r : ratings) {
//            String id = r.getItem();
//            String tempGenre = MovieDatabase.getGenres(id);
//            if (tempGenre.indexOf("Fantasy") != -1) {
//                System.out.println(id + " - " + MovieDatabase.getGenres(id) + " - " + MovieDatabase.getTitle(id));
//            }
//        }
//    }
//    public void printRecommendationsFor() {
//        String moviefile = "data/ratedmoviesfull.csv";
//        String ratingsfile = "data/ratings.csv";
//        RecommendationEngine fr = new RecommendationEngine(ratingsfile, raterDatabase);
//        List<Rating> list = fr.getSimilarRatings("314", 10, 5);
//        int maxResults = 15;
//        if (list.isEmpty()) {
//            System.out.println("Please rate more movies to provide recommendations!");
//        }
//        if (list.size() < maxResults) {
//            maxResults = list.size();
//        }
//        for (int i=0; i<maxResults; i++) {
//            String id = list.get(i).getItem();
//            System.out.println((i+1) + ") " + MovieDatabase.getPoster(id) + " - " + MovieDatabase.getTitle(id) +
//            " - " + MovieDatabase.getGenres(id) + " - " + MovieDatabase.getDirector(id));
//        }
//    }
}

