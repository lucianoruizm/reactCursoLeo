import { Link } from "react-router-dom"

// Tiene importado Link de React-Router-Dom, de esta forma se puede utilizar Link
// para que el usuario pueda acceder a la ruta espicifica al clickear en el item,
// en este caso lo envia a detalles del item.

export const Item = ({ id, title}) => {
  return (
    <div key={id}>
        <Link to={"/item/" + id}>
            {title}
        </Link>
    </div>
  )
}
