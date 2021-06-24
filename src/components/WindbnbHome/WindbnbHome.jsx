import { useState } from "react";

import Header from "./Header";
import RentalPlaceDetails from "./RentalPlaceDetails";
import Footer from "./Footer";

import { staysData } from "../../stays.js";

const WindbnbHome = () => {
  //state
  const [query, setQuery] = useState("");

  //function
  const handleQuery = (e) => {
    setQuery(e.target.value);
    console.log("query = " + e.target.value);
  };

  const byQuery = (query) => (item) =>
    !query || item.city.toLowerCase().includes(query.toLowerCase());

  const filteredStaysData = staysData.filter(byQuery(query));
  console.log("filteredStaysData " + JSON.stringify(filteredStaysData));

  //JSX
  return (
    <>
      <Header query={query} handleQuery={handleQuery} />
      <RentalPlaceDetails staysData={filteredStaysData} />
      <Footer />
    </>
  );
};

export default WindbnbHome;
