import React from "react";

export const Routes = {
    user: {
        name: "user",
        path: "/user",
        component: UsersList
    }
};

const UsersList = () => (
    <ul>
        <li> User one </li>
        <li> User Two </li>
    </ul>
);
