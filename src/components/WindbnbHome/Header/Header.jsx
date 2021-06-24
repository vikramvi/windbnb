import AppLogo from "./AppLogo";
import TopRightSection from "./TopRightSection";
import RentalPlacesCity from "./RentalPlacesCity";
import RentalTotalPlaces from "./RentalTotalPlaces";

import "./Header.css";

const Header = ({ query, handleQuery, staysData }) => {
  return (
    <div className="header">
      <div className="header-first-row">
        <AppLogo />
        <TopRightSection query={query} handleQuery={handleQuery} />
      </div>
      <div className="header-second-row">
        <RentalPlacesCity />
        <RentalTotalPlaces staysData={staysData} />
      </div>
    </div>
  );
};

export default Header;
