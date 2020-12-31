import java.util.*;


public class RecommendationRunner implements Recommender {
    public ArrayList<String> getItemsToRate() {
        ArrayList<String> ratedMovies = new ArrayList<String>();
        ratedMovies.add("0080684"); ratedMovies.add("0102926"); ratedMovies.add("0107207"); ratedMovies.add("0119488"); ratedMovies.add("1478338");
        ratedMovies.add("0109830"); ratedMovies.add("0167260"); ratedMovies.add("2096673"); ratedMovies.add("0077651"); ratedMovies.add("0071562");
        ratedMovies.add("1375666"); ratedMovies.add("0878804"); ratedMovies.add("2582802"); ratedMovies.add("1707386"); ratedMovies.add("2125608");
        ratedMovies.add("2024544"); ratedMovies.add("0043014"); ratedMovies.add("0120689");ratedMovies.add("0088763");
        return ratedMovies;
    }
    public void printRecommendationsFor(String webRaterID) {
        ArrayList<String>ratedMovies = getItemsToRate();
        String moviefile = "data/ratedmoviesfull.csv";
        String ratingsfile = "data/ratings.csv";
        FourthRatings fr = new FourthRatings(ratingsfile);
        ArrayList<Rating> list = fr.getSimilarRatings(webRaterID, 10, 3);
        int maxResults = 15;
        int count = 1;
        if (list.isEmpty()) {
            System.out.println("Please rate more movies to provide recommendations!");
        }
        if (list.size() < maxResults) {
            maxResults = list.size();
        }
        System.out.println("<table class=\"mtable\">");
        System.out.println("<style>");
        System.out.println(".mtable {font:Arial; border-collapse: collapse;}");
        System.out.println(".mtable td, .mtable th{border: 2px solid MidnightBlue; padding: 4px; vertical-align: middle}");
        System.out.println("</style>");
        System.out.println("<tr><td></td><th style=bold>Movie</th><th style=bold>Genre</th><th style=bold>Director</th><th style=bold>Length</th>");
        for (int i=0; i<maxResults; i++) {
            String id = list.get(i).getItem();
            String URL = "http://www.dukelearntoprogram.com/capstone/data/" + MovieDatabase.getPoster(id).substring(7);
            String movieLink = "\"https://www.imdb.com/title/tt"+id+"/\"";
            int totalMins = MovieDatabase.getMinutes(id);
            int mins = totalMins%60;
            int hours = totalMins/60;
            String length = hours+"h"+mins;
            if (!ratedMovies.contains(id)) {
                System.out.println("<tr><th style=bold vertical-align:middle overflow:auto>"+"<img src="+URL+" width=\"50\" height=\"75\">"+"</th>"+"<td>"+
                MovieDatabase.getYear(id)+"   "+"<a href="+movieLink+">"+MovieDatabase.getTitle(id)+"</a>"+"</td>"+"<td>"+MovieDatabase.getGenres(id)+"</td>"+"<td>"+MovieDatabase.getDirector(id)+"</td>"+
                "<td>"+length+"</tr>");
                count++;
            }
        }
    }
}
