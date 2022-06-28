import { useState } from "react";

const SearchParams = () => {
  // const location = "Tokyo, Japan";
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
