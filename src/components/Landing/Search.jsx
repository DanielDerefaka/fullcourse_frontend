import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        style={{
          padding: " 10px 30px",
          background: " #519E38",
          borderRadius: " 5px",
          color: "white",
          border: "none",
          marginLeft: "10px",
          marginTop: "10px",
        }}
        onClick={() => navigate("/property")}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
