const SearchBar = ({ search, setSearch, searchImages }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchImages();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search Mars, Earth, Galaxy..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
    w-full
    rounded-2xl
    border
    border-white/15
    bg-white/5
    backdrop-blur-xl
    px-6
    py-4
    text-white
    placeholder:text-gray-300
    outline-none
    transition-all
    duration-300
    focus:border-orange-300/40
    focus:bg-white/10
    focus:shadow-[0_0_25px_rgba(255,200,120,0.15)]
  "
        />

        <button
          type="submit"
          className="
w-full
rounded-2xl
bg-gradient-to-r
from-orange-500
to-amber-500
py-4
text-lg
font-semibold
text-white
transition-all
duration-300
hover:scale-[1.02]
hover:from-orange-400
hover:to-amber-400
hover:shadow-lg
hover:shadow-orange-500/30
cursor-pointer
"
        >
          Search Images
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
