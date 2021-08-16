# PS D:\Steph\repos\MovieRecommender> Set-ExecutionPolicy Unrestricted -Scope Process
# PS D:\Steph\repos\MovieRecommender> .\scripts\initialdbload\venv\Scripts\activate

import csv
from pydantic import BaseModel
from typing import Optional, List
import re

'''
create tables
    movie
    genre
    etc
populate movie table
for genres
    split genres
    if !contains genres table "genre"
        add genre
add directors to directors
add countries to countries

for each movie in movies
    for each genre in movies.genre
        get genreid
        add movie.id:genre.id
duplicate for directors
duplicate for countries

'''

# # This syntax says the class Movie extends the class BaseModel
# # The BaseModel class is the "I am a pojo" class. Any fields declared are then automatically
# # expected as constructor params. Constructors in python are just like functions. For example, my_instance = MyClass(field="value")
# # Get a field like you would in Java: variable = my_instance.field
# # Setting a field is like setting a public field in java: myinstance.field = "value"


# class Movie(BaseModel):
#     id: int
#     title: str
#     year: int
#     runningtime: int


# class MovieGenreJoin(BaseModel):
#     movie_id: int
#     genre_id: int


# class MovieDirectorJoin(BaseModel):
#     movie_id: int
#     director_id: int


# class MovieCountryJoin(BaseModel):
#     movie_id: int
#     country_id: int


# # Hey look, types! You can specify a variables type by adding ": your type here =" after the name.
# # This is just for documentation. Nothing stops you from assigning a different type, but the IDE should warn you
# movies_table: List[Movie] = []
# genres_table: List[str] = []
# directors_table: List[str] = []
# countries_table: List[str] = []
# movies_genres_table: List[MovieGenreJoin] = []
# movies_countries_table: List[MovieCountryJoin] = []
# movies_directors_table: List[MovieDirectorJoin] = []

# # some bs for my combined methods
# plurals = ['genres', 'directors', 'countries']
# singles = ['genre', 'director', 'country']
# joins = [MovieGenreJoin, MovieDirectorJoin, MovieCountryJoin]
# join_tables = [movies_genres_table,
#                movies_directors_table, movies_countries_table]
# single_tables = [genres_table, directors_table, countries_table]


# def write_multiple_csv(filename):
#     with open(filename, 'w', encoding='utf-8') as csv_file:

#         # write a csv of {id:value} for a single column that is to be normalized


# def write_single_csv(filename, field, field_table):
#     with open(filename, 'w', encoding='utf-8') as csv_file:
#         writer = csv.writer(csv_file, delimiter=',', lineterminator='\n')
#         headers = [field+"_id", field]
#         writer.writerow(headers)
#         rows = []
#         for idx, row in enumerate(field_table):
#             row_data = []
#             row_data.append(idx)
#             row_data.append(row)
#             rows.append(row_data)
#         writer.writerows(rows)

# # write a csv of a join table


# def normalize_to_csv(filename, header_1, header_2, join_class, join_table):
#     with open(filename, 'w', encoding='utf-8') as csv_file:
#         writer = csv.writer(csv_file, delimiter=',', lineterminator='\n')
#         headers = [header_1, header_2]
#         writer.writerow(headers)
#         rows = []
#         for join_class in join_table:
#             dict_values = join_class.dict().values()
#             value_list = []
#             for value in dict_values:
#                 value_list.append(value)
#             rows.append(value_list)
#         writer.writerows(rows)

# # combined method to write all csvs for movie data


# def write_csvs():
#     count = 0
#     while count < len(plurals):
#         single_filename = plurals[count]+'.csv'
#         join_filename = 'movie'+singles[count]+'join.csv'
#         header1 = 'movie_id'
#         header2 = singles[count]+'_id'
#         normalize_to_csv(join_filename, header1, header2,
#                          joins[count], join_tables[count])
#         write_single_csv(single_filename, singles[count], single_tables[count])
#         count += 1




def process_csvs():
    with open('movie_file.csv', mode='w', encoding='utf-8') as movie_file:
        movie_writer = csv.writer(movie_file, delimiter="\t", quotechar='"', lineterminator='\n')
        with open('movie_basics.tsv', encoding='utf-8') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter="\t")
            line = 0
            for row in csv_reader:
                if (line == 0):
                    movie_writer.writerow([row[0], row[2], row[5], row[7]])
                    line += 1
                elif row[1] not in ['movie', 'short']:
                    continue
                elif row[4] == 1:
                    continue
                # elif (row[7] == '\\N') and (row[5] == '\\N'):
                #     movie_writer.writerow([row[0][2:], row[2],'',''])
                # elif row[7] == '\\N':
                #     movie_writer.writerow([row[0][2:], row[2], row[5],''])
                # elif row[5] == '\\N':
                #     movie_writer.writerow([row[0][2:], row[2], '', row[7]])
                else:
                    movie_writer.writerow([row[0][2:], row[2], row[5], row[7]])

process_csvs()
    

# tconst	titleType	primaryTitle	originalTitle	isAdult	startYear	endYear	runtimeMinutes	genres

# def read_tsv(filename):
#     tsv_file = open(filename)
#     tsv_reader = csv.reader(tsv_file, delimiter="\t")
#     for row in tsv_reader:

#     with open('movie_basics.tsv', encoding='utf-8') as csvfile:
#         moviereader = csv.reader(csvfile, delimiter="", quotechar='"')
#         next(moviereader)  # Reads first row
#         for movie_id, title, year, country_raw, genre_raw, director_raw, minutes, poster in moviereader:
#             movie_id = int(movie_id)
#             year = int(year)
#             minutes = int(minutes)
#             movie = Movie(
#                 id=movie_id,
#                 title=title,
#                 year=year,
#                 minutes=minutes
#             )


# with open('ratedmoviesfull.csv', encoding='utf-8') as csvfile:
#     moviereader = csv.reader(csvfile, delimiter=',', quotechar='"')
#     next(moviereader) # Reads first row
#     for movie_id, title, year, country_raw, genre_raw, director_raw, minutes, poster in moviereader:
#         movie_id = int(movie_id)
#         year = int(year)
#         minutes = int(minutes)
#         movie = Movie(
#             id=movie_id,
#             title=title,
#             year=year,
#             minutes=minutes
#         )

#         genres: List[str] = genre_raw.split(', ')
#         for genre in genres:
#             if genre not in genres_table:
#                 genres_table.append(genre)

#             genre_id = genres_table.index(genre)
#             join_row = MovieGenreJoin(
#                 movie_id=movie_id,
#                 genre_id=genre_id
#             )
#             movies_genres_table.append(join_row)

#         directors: List[str] = director_raw.split(', ')
#         for director in directors:
#             if director not in directors_table:
#                 directors_table.append(director)
#             director_id = directors_table.index(director)
#             join_directors_row = MovieDirectorJoin(
#                 movie_id=movie_id,
#                 director_id=director_id
#             )
#             movies_directors_table.append(join_directors_row)

#         countries: List[str] = country_raw.split(', ')
#         for country in countries:
#             if country not in countries_table:
#                 countries_table.append(country)
#             country_id = countries_table.index(country)
#             join_countries_row = MovieCountryJoin(
#                 movie_id=movie_id,
#                 country_id=country_id
#             )
#             movies_countries_table.append(join_countries_row)
#     write_csvs()
    # write_single_csv('countries.txt', 'country', countries_table)
    # write_single_csv('directors.txt', 'director', directors_table)
    #write_single_csv('genres.txt', 'genre', genres_table)
    # normalize_to_csv('moviedirectorjoin.txt', 'movie_id', 'director_id', MovieDirectorJoin, movies_directors_table)
    # normalize_to_csv('moviegenrejoin.txt', 'movie_id', 'director_id', MovieGenreJoin, movies_genres_table)
    # normalize_to_csv('moviecountryjoin.txt', 'movie_id', 'country_id', MovieCountryJoin, movies_countries_table)


# def write_incremented_csv(filename, field, field_split, field_table):
#     for field in field_split:
#         if field not in field_table:
#             field_table.append(field)
#     with open(filename, 'w') as csv_file:
#         writer = csv.writer(csv_file, delimiter=',')
#         headers = [field+"_id", field]
#         writer.writerow(headers)




# tried to refactor table creation into single method
# def split_to_table(raw_data, table, join_class, join_table, movie_id):
#     data_list: List[str] = raw_data.split(', ')
#     for data in data_list:
#         if data not in table:
#             table.append(data)
#         data_id = table.index(data)
#         join_row = join_class(
#             movie_id=mov_id,
#             id2=data_id
#         )
#         join_table.append(join_row)

# @param filename a filename in the format "table1 table2.extension"
# @param header_1 name of the header in column 1
# @param header_2 name of the header in column 2
# @param class of the joined tables, ex: MovieDirectorJoin
# @param name of the join table created as a list, ex: movies_directors_join
# left this because I think this method is more appropriate above
# def normalize_to_csv(filename, header_1, header_2, join_class, join_table):
#     tableheaders: List[str] = re.split('[ .]', filename)
#     with open(filename, 'w') as csv_file:
#         writer = csv.writer(csv_file, delimiter=',')
#         headers = [header_1, header_2]
#         writer.writerow(headers)
#         rows = []
#         for join_class in join_table:1
#             dict_values = join_class.dict().values()
#             value_list = []
#             for value in dict_values:
#                 value_list.append(value)
#             rows.append(value_list)
#         writer.writerows(rows)
#     with open(tableheaders[1], 'w') as csv_file:
#         writer = csv.writer(csv_file, delimiter=',')
#         headers = ['id', header_2]
#         writer.writerow(headers)
#         rows = []
#         count = 0
#         for join_class in join_table:
#             dict_keys
#             print(join_class)
