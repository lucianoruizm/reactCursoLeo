import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

// Se importan los componentes creados y se renderizan dentro del return de App.
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Greeting'} />
    </div>
  );
}

export default App;
