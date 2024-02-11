import { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <>
      <div className="search">
      <input
            type="text"
            placeholder="seacrh for taste"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-100 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              
            }}
          />
        <button className="search-btn" >Search</button>
      </div>
    </>
  );
};

export default SearchBox;
