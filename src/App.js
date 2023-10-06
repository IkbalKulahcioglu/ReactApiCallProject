import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './Api.js'

function App() {
 
  const handleSubmit =(term) =>{
    console.log(term);
    searchImages(term);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
    </div>
  );
}

export default App;
