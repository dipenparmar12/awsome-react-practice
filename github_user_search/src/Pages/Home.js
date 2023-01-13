import React, { Fragment } from "react";
import Search from "../Component/Search/Search";
import UsersList from "../Component/Users/UsersList";

export const Home = () => (
  <Fragment>
    <Search />
    <UsersList />
  </Fragment>
);
