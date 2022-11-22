import './ItemListContainer.css'

// Se le importa el estilo desde ItemListContainer.css.
// ItemListContainer recibe una prop desde App para poder ser usada dentro de su return.
// Es importado para poder usarse en App.
const ItemListContainer = ({ greeting }) => {
  return (
      <div className="item-list">{greeting}</div>
  )
}

export default ItemListContainer;