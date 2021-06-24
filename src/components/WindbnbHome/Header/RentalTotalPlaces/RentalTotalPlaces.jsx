import "./RentalTotalPlaces.css";
const RentalTotalPlaces = ({ staysData }) => {
  //console.log("staysData    " + Object.keys(staysData).length);
  return (
    <span className="rentalPlacesTotalCount">
      {Object.keys(staysData).length} stays
    </span>
  );
};

export default RentalTotalPlaces;
