import React, { useState, useContext } from "react";
import GithubContext from "../../Context/Github/githubContext";
import AlertContext from "../../Context/Alert/alertContext";

export const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [search_query, setSearch_query] = useState("");

  const onInput = (event) => setSearch_query(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (search_query === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(search_query);
      setSearch_query("");
    }
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='search_query'
          placeholder='search user...'
          onChange={onInput}
          value={search_query}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <input
          type='button'
          value='clear'
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        />
      )}
    </div>
  );
};

export default Search;
