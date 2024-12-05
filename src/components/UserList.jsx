import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

function UserList() {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("/api/profile/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>Nombre:</strong> {user.name}, <strong>Ciudad:</strong> {user.city}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron usuarios.</p>
      )}
    </div>
  );
}

export default UserList;
