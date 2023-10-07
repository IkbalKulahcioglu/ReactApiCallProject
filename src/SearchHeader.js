import { useState } from "react";
function SearchHeader({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };
  const [valueInput, setvalueInput] = useState("");
  const handleInputChange = (event) => {
    setvalueInput(event.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>What are you looking for?</label>        
        <input value={valueInput} onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
