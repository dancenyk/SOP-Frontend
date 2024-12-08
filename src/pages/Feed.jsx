import Posts from "../components/Posts";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Feed() {
  const { user } = useContext(UserContext);
  return (
    <div className="bodyFeed">
      <h2>"Si quieres cambiar al mundo, cámbiate a ti mismo"</h2>
      {user === null ? "loading" : <p>Hola, {user.name}. ¿Qué estás pensando?</p>}
      <Posts />
    </div>
  );
}

export default Feed;
