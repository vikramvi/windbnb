import "./TopRightSection.css";

import SearchControl from "./SearchControl";
import GuestsControl from "./GuestsControl";
import SearchIcon from "./SearchIcon";

const TopRightSection = () => {
  return (
    <div className="topRightControls">
      <SearchControl />
      <GuestsControl />
      <SearchIcon />
    </div>
  );
};

export default TopRightSection;
