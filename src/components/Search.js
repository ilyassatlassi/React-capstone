import './style/search.css';

export default function SearchBar({ searchTerm, onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}
