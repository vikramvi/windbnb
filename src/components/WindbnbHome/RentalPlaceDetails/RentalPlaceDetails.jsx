import "./RentalPlaceDetails.css";

import RentalPlaceImage from "./RentalPlaceImage";
import RentalPlaceLongDescription from "./RentalPlaceLongDescription";
import RentalPlaceRating from "./RentalPlaceRating";
import RentalPlaceShortDescription from "./RentalPlaceShortDescription";
import RentalPlaceSpecialStatus from "./RentalPlaceSpecialStatus";

import { staysData } from "../../../stays.js";

const RentalPlaceDetails = () => {
  return (
    <div className="RentalPlaceDetails">
      {/* <div>
        {staysData.map((data, key) => {
          return <div key={key}>{data.title + " , " + data.rating}</div>;
        })}
      </div> */}

      {staysData.map((data, key) => {
        return (
          <div key={key}>
            <div>
              <RentalPlaceImage image={data.photo} />
            </div>
            <RentalPlaceSpecialStatus superHost={data.superHost} />
            <RentalPlaceShortDescription type={data.type} />
            <RentalPlaceRating rating={data.rating} />
            <div>
              <RentalPlaceLongDescription title={data.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RentalPlaceDetails;
