import UserList from "../components/UserList";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Users() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <UserList />
    </div>
  );
}

export default Users;