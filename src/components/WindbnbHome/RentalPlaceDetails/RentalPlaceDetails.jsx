import "./RentalPlaceDetails.css";

import RentalPlaceImage from "./RentalPlaceImage";
import RentalPlaceLongDescription from "./RentalPlaceLongDescription";
import RentalPlaceRating from "./RentalPlaceRating";
import RentalPlaceShortDescription from "./RentalPlaceShortDescription";
import RentalPlaceSpecialStatus from "./RentalPlaceSpecialStatus";

const RentalPlaceDetails = ({ staysData }) => {
  return (
    <div className="RentalPlaceDetails">
      {/* <div>
        {staysData.map((data, key) => {
          return <div key={key}>{data.title + " , " + data.rating}</div>;
        })}
      </div> */}

      {staysData.map((data, key) => {
        return (
          <div key={key} className="RentalPlace">
            <div>
              <RentalPlaceImage image={data.photo} />
            </div>
            <div>
              {/* {console.log(data.superHost)} */}
              {data.superHost ? (
                <RentalPlaceSpecialStatus superHost={data.superHost} />
              ) : null}
              <RentalPlaceShortDescription type={data.type} />
              <RentalPlaceRating rating={data.rating} />
            </div>
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
