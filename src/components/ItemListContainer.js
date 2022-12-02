import './ItemListContainer.css'

// Se le importa el estilo desde ItemListContainer.css.
// ItemListContainer recibe una prop desde App para poder ser usada dentro de su return.
// Es importado para poder usarse en App.
const ItemListContainer = ({ movies }) => {
  return (
    <div> 
      {movies.map((movie)=>{ 
      let {id, title} = movie;
      return(
          <p key={id}> {title} </p>
      )
      })}
    </div>
  )
}

export default ItemListContainer;