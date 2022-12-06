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
      title: "Minions",
      image: "http://image.tmdb.org/t/p/w500/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
      category: "Accion"
    },
    {
      id: 2,
      title: "Minions2",
      category: "Terror",
      image: "http://image.tmdb.org/t/p/w500/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
    },
    {
      id: 3,
      title: "Minions3",
      category: "Suspenso",
      image: "http://image.tmdb.org/t/p/w500/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
    },
  ]

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer movies={movies} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer movies={movies} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;