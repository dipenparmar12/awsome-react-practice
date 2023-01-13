import React, { useContext } from "react";
import Users from "./Users";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/Github/githubContext";

const UsersList = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Users user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default UsersList;
