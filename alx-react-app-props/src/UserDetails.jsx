import { useContext } from "react";
import UserContext from './UserContext';

function UserDetails() {

  const contextValue = useContext(UserContext);

    return (
      <div>
        <p>Name: {contextValue.name}</p>
        <p>Email: {contextValue.email}</p>
      </div>
    );
  }

  export default UserDetails;