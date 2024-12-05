import Posts from "../components/Posts";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Feed() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Feed</h1>
       <p>Hola, {user.name}. ¿Qué estás pensando?</p>
      <Posts />
    </div>
  );
}

export default Feed;