import logo from './logo.svg';
import './App.css';
import MovieList from './components2/MovieList';
import AddMovie from './components2/AddMovie';
import Filter from './components2/Filter';

function App() {
  return (
    <div className="App">
      <Filter/>
      <MovieList/>
      <AddMovie/>
      
    </div>
  );
}

export default App;
