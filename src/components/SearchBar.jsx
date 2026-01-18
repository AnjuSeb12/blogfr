const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      className="w-full p-3 border border-red-300 rounded-md text-amber-50"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
