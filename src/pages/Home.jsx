import { Link } from "react-router-dom";

const Home = () => {
  return (
   
      <section className="hero">
        <div className="text-content">
          <h1>Conéctate, comparte y crece en un espacio hecho para ti</h1>
          <ul>
            <li>Conéctate con mujeres que entienden tu camino.</li>
            <li>
              Comparte tus logros, retos y aprendizajes en un entorno seguro y
              comprensivo
            </li>
            <li>Aprende de otros</li>
            <li>Entérate de eventos para mejorar tu salud</li>
            <li>Encuentra a los mejores profesionales especializados en SOP</li>
          </ul>
          <Link to="/register">
            <button className="cta-button">Regístrate gratis</button>
          </Link>
        </div>
        <div className="home-image">
          <img src="/imgHome.png" alt="welcome" />
        </div>
      </section>
  );
};

export default Home;
