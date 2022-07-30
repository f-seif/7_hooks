import MovieCard from './MovieCard'

function MovieList({moviesProps}) {
  return (
    <div className="container">
      <div className="row">
        {
          moviesProps.map((el) => <MovieCard cardProps={el}/>)
        }
      </div>
    </div>
  );
}

export default MovieList;
