const SearchBar = ({ search, setSearch, searchImages }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <input
        type="text"
        placeholder="Search Mars, Earth, Galaxy..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-gray-300 outline-none focus:border-sky-400"
      />

      <button
        onClick={searchImages}
        className="w-full rounded-xl bg-sky-500 py-4 text-lg font-semibold transition hover:bg-sky-600"
      >
        Search Images
      </button>
    </div>
  );
};

export default SearchBar;
