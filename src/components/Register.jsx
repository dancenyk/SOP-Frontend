import { useState, useContext } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);


  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();

      localStorage.setItem("authToken", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await axios.post(
        "/api/profile",
        { uid: user.uid, name, email, city },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const response = await axios.get(`/api/profile/users/${user.uid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });


      setUser({ uid: user.uid, name, email, city });
  
      navigate("/feed");
    } catch (error) {
      console.error("Error al registrar:", error); 
      if (error.response) {
        // Si hay una respuesta de la API
        console.error("Respuesta del error:", error.response.data);
        setError(`Error en el servidor: ${error.response.data.message || error.response.status}`);
      } else if (error.request) {
        // Si no hay respuesta, pero se hizo la solicitud
        console.error("Error en la solicitud:", error.request);
        setError("No se recibió respuesta del servidor. Intenta de nuevo.");
      } else {
        // Otro tipo de error
        console.error("Error desconocido:", error.message);
        setError("Hubo un error desconocido. Por favor, inténtalo de nuevo.");
      }
    }
  };

  return (
    <div>
      <h2>Crear una cuenta nueva</h2>
      <form className="form-register" onSubmit={handleRegister}>
        <input
          type="text"
          
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button className="btn-submit" type="submit">Crear</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
export default Register;
