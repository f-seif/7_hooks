import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from 'react';

function Nav({searchValue, handleSearch, handleRating, searchRating}) {
  //const [rating, setRating] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid p-2">
        <div className="input-group m-2" style={{maxWidth:"50%"}}>
          <span className="input-group-text">Filter movies</span>
          <input type="text" class="form-control" placeholder="Enter movie name" aria-label="Username" value={searchValue} onChange={handleSearch}/>
        </div>
        <div className="m-2">
          <input type="number" min="0" max="5" class="form-control" placeholder="Enter rating" aria-label="rating" value={searchRating} onChange={handleRating}/>

          {
            /*<Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={(selectedValue,setSearchRating) => setRating(selectedValue)}
              resetOnSecondClick
            />*/
          }
        </div>
      </div>
    </nav>
  );
}

export default Nav;
