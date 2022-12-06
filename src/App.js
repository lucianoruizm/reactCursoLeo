import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import { data as movies } from "./data";

// Se importan los componentes creados y se renderizan dentro del return de App.
function App() {

  const task = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });

  task.then(result => {
    result = movies;
    console.log(result);
  })

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