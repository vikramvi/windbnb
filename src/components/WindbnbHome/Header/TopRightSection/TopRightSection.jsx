import "./TopRightSection.css";

import SearchControl from "./SearchControl";
import GuestsControl from "./GuestsControl";
import SearchIcon from "./SearchIcon";

const TopRightSection = ({ query, handleQuery }) => {
  return (
    <div className="topRightControls">
      <SearchControl query={query} handleQuery={handleQuery} />
      <GuestsControl />
      <SearchIcon />
    </div>
  );
};

export default TopRightSection;
