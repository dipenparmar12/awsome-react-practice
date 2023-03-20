import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Users = ({ user: { avatar_url, login } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        style={{ width: "60px" }}
        alt=''
      />
      <h3>{login}</h3>
      <div>
        {" "}
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Users;
