import React from "react";
import "./SearchCity.css";
import { FaSearch } from "react-icons/fa";

const SearchCity = ({ getData, setCity }) => {
    return (
        <div className="input">
            <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search city..."
                className="text"
            />
            <button
                onClick={getData}
                className="button"
            >
                <FaSearch size={20} />
            </button>
        </div>
    );
};

export default SearchCity;
