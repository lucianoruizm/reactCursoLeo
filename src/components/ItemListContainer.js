import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
      <div className="item-list">Este es: {props.name}</div>
  )
}

export default ItemListContainer;