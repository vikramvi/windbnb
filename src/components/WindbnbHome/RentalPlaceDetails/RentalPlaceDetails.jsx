import RentalPlaceImage from "./RentalPlaceImage";
import RentalPlaceLongDescription from "./RentalPlaceLongDescription";
import RentalPlaceRating from "./RentalPlaceRating";
import RentalPlaceShortDescription from "./RentalPlaceShortDescription";
import RentalPlaceSpecialStatus from "./RentalPlaceSpecialStatus";

const RentalPlaceDetails = () => {
  return (
    <div className="RentalPlaceDetails">
      <div>
        <RentalPlaceImage />
      </div>
      <RentalPlaceSpecialStatus />
      <RentalPlaceShortDescription />
      <RentalPlaceRating />
      <div>
        <RentalPlaceLongDescription />
      </div>
    </div>
  );
};

export default RentalPlaceDetails;
