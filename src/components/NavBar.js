import './NavBar.css'
import CartWidget from './CartWidget'

// Se le importa el estilo desde NavBar.css.
// NavBar contiene el nombre del proyecto, la lista de secciones y el componente CardWidget que fue importado.
// Se importa para que pueda usarse en App. 
const NavBar = ({category}) => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand color-name" href="/">Nombre del proyecto</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link color-link" href={"/category/accion"}>Acción</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-link" href={"/category/terror"}>Terror</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-link" href={"/category/suspenso"}>Suspenso</a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar