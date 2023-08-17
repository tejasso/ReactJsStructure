// containers/Users/Users.jsx
import React, { useEffect, useState } from "react";
import styles from "./users.module.scss";
import { userService } from "../../api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await userService.geAlltUser();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.users}>
      <h1>Users Page</h1>
      {users.map((user) => (
        <div key={user.id}>{user.title}</div>
      ))}
    </div>
  );
}

export default Users;
