import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ul>
        <li><ItemListContainer name={'item 1'} /></li>
        <li><ItemListContainer name={'item 2'} /></li>
        <li><ItemListContainer name={'item 3'} /></li>
        <li><ItemListContainer name={'item 4'} /></li>
      </ul>
    </div>
  );
}

export default App;
