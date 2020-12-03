import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Search.css";
const Search = () => {
  return (
    <div className="search">
      <div className="search-items">
        <div className="item">For Sale</div>
        <div className="item">To Rent</div>
        <div className="item">To Sale</div>
      </div>
      <div className="search-input">
        <input type="text" />
      </div>
      <div className="search-price">
        <div className="min-price">
          <label>Min Price </label>
          <select name="min-price" id="min-price">
            <option value="volvo">Volvo</option>
          </select>
        </div>
        <div className="max-price">
          <label>Min Price </label>
          <select name="min-price" id="min-price">
            <option value="volvo">Volvo</option>
          </select>
        </div>
      </div>
      <div className="search-bedroom">
        <div className="min-bed">
          <label>Min Bed </label>
          <select name="min-bed" id="min-bed">
            <option value="volvo">Volvo</option>
          </select>
        </div>
        <div className="max-bed">
          <label>Max Bed </label>
          <select name="max-bed" id="max-bed">
            <option value="volvo">Volvo</option>
          </select>
        </div>
      </div>
      <button className="btn btn-search">Search</button>
    </div>
  );
};

export default Search;
