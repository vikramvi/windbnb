import StarIcon from "@material-ui/icons/Star";
import "./RentalPlaceRating.css";

const RentalPlaceRating = ({ rating }) => {
  return (
    <div className="placeRating">
      <StarIcon />
      <span>{rating}</span>
    </div>
  );
};

export default RentalPlaceRating;
