const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <p>
        Filter shown with: <input onChange={handleFilterChange} />
      </p>
    </div>
  );
};

export default Filter;
