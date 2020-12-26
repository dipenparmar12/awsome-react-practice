import React from "react";
import { connect } from "react-redux";
import { getUsersAsync } from "./usersReducer";

const UsersContainer = ({ getUsersAsync, users }) => {
    React.useEffect(() => {
        getUsersAsync();
    }, []);

    return <ul>{users && users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};

const mapStateToProps = state => ({
    users: state.users.list
});

const mapDispatchToProps = dispatch => ({
    getUsersAsync: () => dispatch(getUsersAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
