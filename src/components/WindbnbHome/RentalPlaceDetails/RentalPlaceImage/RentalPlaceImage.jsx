import "./RentalPlaceImage.css";

const RentalPlaceImage = ({ image }) => {
  return (
    <>
      <img src={image} alt="rental place" className="propertyImage" />
    </>
  );
};

export default RentalPlaceImage;
