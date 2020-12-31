public class DirectorsFilter implements Filter {
    private String myDirectors;
    
    public DirectorsFilter(String directors) {
        myDirectors = directors;
    }
    
    @Override
    public boolean satisfies(String id) {
        String movieDirectors = MovieDatabase.getDirector(id);
        String[] directorArray = myDirectors.split("[,]", 0);
        for (String dir : directorArray) {
            if (movieDirectors.indexOf(dir) != -1) {
                return true;
            }
        }
        return false;
    }

}
