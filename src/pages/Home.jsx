import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">SOPERWAPAS</div>
        <nav className="navigation">
          <Link to="/login">
          <button>Entrar</button>
          </Link>
          <Link to="/register">
          <button>Registrarse</button>
          </Link>
        </nav>
      </header>
      <section className="hero">
        <div className="text-content">
          <h1>Conéctate, comparte y crece en un espacio hecho para ti</h1>
          <ul>
            <li>Conéctate con mujeres que entienden tu camino.</li>
            <li>Comparte tus logros, retos y aprendizajes en un entorno seguro y comprensivo</li>
            <li>Aprende de otros</li>
            <li>Entérate de eventos para mejorar tu salud</li>
            <li>Encuentra a los mejores profesionales especializados en SOP</li>
          </ul>
          <Link to="/register">
            <button className="cta-button">Regístrate gratis</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
