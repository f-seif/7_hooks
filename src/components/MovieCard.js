import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

function MovieCard({cardProps}) {
  return (
      <div className="card m-2" style={{width: "18rem"}}>
        <img src={cardProps.imageSrc} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{cardProps.title}</h5>
          <Rating style={{ maxWidth: "180px" }} value={cardProps.rating} readOnly/>
          <p className="card-text">{cardProps.description}</p>
        </div>
      </div>
  );
}

export default MovieCard;
