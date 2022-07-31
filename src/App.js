import { useState } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import { moviesData } from './Data';

function App() {
  const [movies,setMovies] = useState(moviesData);
  const [searchValue,setSearchValue] = useState("");
  const [searchRating,setSearchRating] = useState(0);

  const handleSearch=(e) => {
   setSearchValue(e.target.value)
 }

 const handleRating=(e) => {
  setSearchRating(Number(e.target.value))
}


  const AddMovie = () => {
    const data = {
      imageSrc: document.getElementsByName("imageSrc")[0].value,
      rating: Number(document.getElementsByName("rating")[0].value),
      title: document.getElementsByName("title")[0].value,
      description: document.getElementsByName("des")[0].value
    };
    setMovies([...movies, data]);
    document.getElementsByName("title")[0].value = "";
    document.getElementsByName("imageSrc")[0].value = "";
    document.getElementsByName("rating")[0].value = 0;
    document.getElementsByName("des")[0].value = "";
  }

  return (
    <div>
      <Nav searchValue={searchValue} handleSearch={handleSearch} searchRating={searchRating} handleRating={handleRating}/>
      <div className="m-2">
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal">Add movie</button>
      </div>
      <MovieList moviesProps={movies.filter(
        (movie) =>  movie.title.toLowerCase()
        .includes(searchValue.toLowerCase().trim()
        ) &&
        movie.rating >= searchRating
        )}/>
      <div id="modal" className="modal fade" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter new movie details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form className="modal-body" name="newMovieForm">
              <input type="text" name="title" class="form-control mb-2" placeholder="Enter movie name" aria-label=""/>
              <input type="url" name="imageSrc" class="form-control mb-2" placeholder="Enter movie image url" aria-label=""/>
              <input type="number" name="rating" min="0" max="5" class="form-control mb-2" placeholder="Enter movie rating" aria-label=""/>
              <input type="text" name="des" class="form-control" placeholder="Enter movie description" aria-label=""/>
            </form>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="sc" type="submit" class="btn btn-primary" onClick={AddMovie} data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
