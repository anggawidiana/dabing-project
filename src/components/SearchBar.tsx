const SearchBar = () => {
  return (
    <form className="w-full px-16">
      {/* Label ini tetap untuk aksesibilitas, tidak terlihat secara visual */}
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-pri sr-only dark:text-white"
      >
        Search
      </label>
      {/* Kontainer utama yang kini memiliki gaya card */}
      <div className="relative bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        {/* Icon pencarian, posisinya tetap di dalam input */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        {/* Input pencarian, kini tanpa border karena sudah ada di kontainer */}
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-800 rounded-lg bg-white focus:outline-none"
          placeholder="Search Blog, Artikel.."
          required
        />
        {/* Tombol pencarian dengan gaya yang disesuaikan dari card */}
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-sec hover:bg-third focus:ring-4 focus:outline-none focus:ring-sec font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300 font-oswald"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
