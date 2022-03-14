import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        className={`searchBox ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
