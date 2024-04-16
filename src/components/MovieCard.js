import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  // w-48 pr-4
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;