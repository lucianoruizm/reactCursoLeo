import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

// Se importan los componentes creados y se renderizan dentro del return de App.
function App() {

  const movies = [
    {
      id: 1,
      title: "Minions"
    },
    {
      id: 2,
      title: "Minions2"
    },
    {
      id: 3,
      title: "Minions3"
    },
  ]

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer movies={movies} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;