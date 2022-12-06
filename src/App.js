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
      title: "Batman - Hush",
      category: "Terror",
      image: "http://image.tmdb.org/t/p/w500/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg",
    },
    {
      id: 3,
      title: "Star Wars Episode III - Revenge of the Sith",
      category: "Suspenso",
      image: "http://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
    },
    {
      id: 4,
      title: "Black Adam",
      image: "http://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      category: "Accion"
    },
    {
      id: 5,
      title: "Avengers - Infinity War",
      category: "Terror",
      image: "http://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    },
    {
      id: 6,
      title: "A Quiet Place - Part II ",
      category: "Suspenso",
      image: "http://image.tmdb.org/t/p/w500/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
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