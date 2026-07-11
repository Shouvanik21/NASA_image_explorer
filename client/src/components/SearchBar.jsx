const SearchBar = ({ search, setSearch, searchImages }) => {
  return (
    <div className="mt-[20px] flex justify-center items-start flex-col ">
      <input
        className="w-[250px] border-white-500"
        type="text"
        placeholder="enter space image to search"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <button type="button" onClick={searchImages}>Search</button>
    </div>
  );
};

export default SearchBar;
