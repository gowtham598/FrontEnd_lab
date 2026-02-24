import React, { useState, useRef } from "react";

const SearchBar = ({ onSearch }) => {
  // Controlled input
  const [controlledValue, setControlledValue] = useState("");

  // Uncontrolled input
  const uncontrolledRef = useRef();

  const handleControlledChange = (e) => {
    setControlledValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleUncontrolledSearch = () => {
    alert("Uncontrolled Input Value: " + uncontrolledRef.current.value);
  };

  return (
    <div className="mb-6 space-y-4">
      
      {/* Controlled Input */}
      <div>
        <label className="font-semibold">Controlled Search:</label>
        <input
          type="text"
          value={controlledValue}
          onChange={handleControlledChange}
          className="border p-2 ml-3 rounded"
          placeholder="Type to filter..."
        />
      </div>

      {/* Uncontrolled Input */}
      <div>
        <label className="font-semibold">Uncontrolled Input:</label>
        <input
          type="text"
          ref={uncontrolledRef}
          className="border p-2 ml-3 rounded"
          placeholder="Enter something..."
        />
        <button
          onClick={handleUncontrolledSearch}
          className="ml-3 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Show Value
        </button>
      </div>

    </div>
  );
};

export default SearchBar;