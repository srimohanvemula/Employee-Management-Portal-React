function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employee by name..."
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;