import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          ArtesaCol
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/sec-noticias">
              Noticias
            </NavLink>
            <NavLink className="nav-link" to="/sec-servicio">
              Servicios
            </NavLink>
            <NavLink className="nav-link" to="/sec-registro">
              Registro
            </NavLink>
            <NavLink className="nav-link" to="/sec-login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/sec-equipo">
              Equipo
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
