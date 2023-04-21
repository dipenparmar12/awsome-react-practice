import React, { useState } from "react";
import { NavLink, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth';
import { RequireAuth } from './Auth';
import { Login } from './Auth';

function Nav() {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
      {authed && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home (Public)</h1>
        <Nav />
        <h1> Welcome. </h1>
      </div>
    ),
  },
  {
    path: "about",
    element: <div> <h1>about (Public)</h1>   <Nav/> about</div>,
  },
  {
    path: "login",
    element: <div> <h1>login (Public)</h1>  <Nav/> <Login/> </div>,
  },
  {
    path: "dashboard",
    element: <RequireAuth> <div> <h1>dashboard (Private)</h1>  <Nav/>  dashboard</div> </RequireAuth>,
  },
  {
    path: "pricing",
    element:<RequireAuth>  <div> <h1>pricing (Private)</h1>  <Nav/>  pricing</div> </RequireAuth> ,
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // const [count, setCount] = useState(0);

  // return (
  //   <div className="App">
  //     <Nav />
  //     <header className="App-header">
  //       <p>Hello Vite + React!</p>
  //       <p>
  //         <button type="button" onClick={() => setCount((count) => count + 1)}>
  //           count is: {count}
  //         </button>
  //       </p>
  //       <p>
  //         Edit <code>App.jsx</code> and save to test HMR updates.
  //       </p>
  //     </header>
  //   </div>
  // );
}

export default App;
