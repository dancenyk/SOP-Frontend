import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const isAuthenticated = localStorage.getItem("authToken");
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
  };

  if (location.pathname === "/login" || location.pathname === "/register") {
    return;
  }

  return (
    <nav>
      <ul>
        {location.pathname === "/" && (
          <li className="navbar-logo">
            <Link to="/">SOPerWapas</Link>
          </li>
        )}
        {!isAuthenticated && location.pathname === "/" && (
          <>
            <div className="homeButtons">
              <li>
                <Link to="/login">
                  <button>Entrar</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button>Registrarse</button>
                </Link>
              </li>
            </div>
          </>
        )}
        {isAuthenticated && location.pathname !== "/" && (
          <>
            <li>
              <Link to="/profile">Ver Perfil</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/users">Usuarios</Link>
            </li>
            <li>
              <Link to="/">
                <button onClick={handleLogout}>Cerrar sesión</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
