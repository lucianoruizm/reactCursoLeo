import { Link } from 'react-router-dom';
import './ItemListContainer.css'

// Se le importa el estilo desde ItemListContainer.css.
// ItemListContainer recibe una prop desde App para poder ser usada dentro de su return.
// Es importado para poder usarse en App.
const ItemListContainer = ({ movies }) => {
  return (
    <div className='item-list'> 
      <h2>Listado de peliculas: </h2>
        {movies.map((movie)=>{ 
        let {id, title} = movie;
        return(
            <Link to={"/item/" + movie.id}>
              <p key={id}> {title} </p>
            </Link>
        )
        })}
    </div>
  )
}

export default ItemListContainer;