export interface IMovieCard {
  /**
   * Title of the movie
   */
  title: string;
  /**
   * Genere of the movie
   */
  genreId: number;
  /**
   * Id of the movie in the database
   */
  movieId: number;
  /**
   * Avarage of votes of the movie
   */
  voteAverage: number;
  /**
   * Path to the image of the poster for the movie
   */
  posterPath: string;
}
