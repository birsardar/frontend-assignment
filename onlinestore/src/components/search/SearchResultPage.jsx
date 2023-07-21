import React from "react";
import { useLocation } from "react-router-dom";
import SearchResult from "../search/SearchResult";

const SearchResultPage = ({ setCartItems, cartItems }) => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <div className="container">
      <h1>Search Results</h1>
      {searchResults ? (
        <SearchResult
          searchResults={searchResults}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ) : (
        <div>No search results found.</div>
      )}
    </div>
  );
};

export default SearchResultPage;
