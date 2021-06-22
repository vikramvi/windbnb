import AppLogo from "./AppLogo";
import TopRightSection from "./TopRightSection";
import RentalPlacesCity from "./RentalPlacesCity";
import RentalTotalPlaces from "./RentalTotalPlaces";

const Header = () => {
  return (
    <>
      <AppLogo />
      <TopRightSection />
      <RentalPlacesCity />
      <RentalTotalPlaces />
    </>
  );
};

export default Header;
