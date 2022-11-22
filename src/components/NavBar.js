import './NavBar.css'
import CartWidget from './CartWidget'

// Se le importa el estilo desde NavBar.css.
// NavBar contiene el nombre del proyecto, la lista de secciones y el componente CardWidget que fue importado.
// Se importa para que pueda usarse en App. 
const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand color-name" href="!#">Nombre del proyecto</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link color-link" aria-current="page" href="!#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-link" href="!#">Sección 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-link" href="!#">Sección 2</a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar