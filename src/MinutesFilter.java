public class MinutesFilter implements Filter {
    private int myMin;
    private int myMax;
    
    public MinutesFilter(int min, int max) {
        myMin = min;
        myMax = max;
    }
    
    @Override
    public boolean satisfies(String id) {
        int length = MovieDatabase.getMinutes(id);
        return length >= myMin && length <= myMax;
    }

}
