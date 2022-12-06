import { Link } from "react-router-dom"
import "./Item.css"

// Tiene importado Link de React-Router-Dom, de esta forma se puede utilizar Link
// para que el usuario pueda acceder a la ruta espicifica al clickear en el item,
// en este caso lo envia a detalles del item.

export const Item = ({ id, title, image}) => {
  return (
    <div key={id} className='movieCard' >
      <Link to={"/item/" + id}>
        <img src={image} alt={title} className='movieImage' />
        <h3>{title}</h3>
      </Link>
    </div>
  )
}
