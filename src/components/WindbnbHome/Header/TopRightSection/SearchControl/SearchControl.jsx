import "./SearchControl.css";

const SearchControl = ({ query, handleQuery }) => {
  return (
    <div className="searchByCity">
      <input
        placeholder="Helsinki, Finland"
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
};

export default SearchControl;
