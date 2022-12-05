import { ItemList } from './ItemList';
import './ItemListContainer.css'

// Se le importa el estilo desde ItemListContainer.css.
// ItemListContainer recibe una prop desde App para poder ser usada dentro de su return.
// Es importado para poder usarse en App.
// Tiene importado el componente ItemList al cual le pasa las props.
const ItemListContainer = ({ movies }) => {
  return (
    <div className='item-list'> 
      <h2>Listado de peliculas: </h2>
      <ItemList movies={movies}/>
    </div>
  )
}

export default ItemListContainer;