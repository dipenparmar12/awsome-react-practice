import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('Auth.jsx::[25] user', user)
  // }, [user])

  const handleLogin = () => {
    login(user).then(() => {
      navigate("/dashboard");
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="email" value={user} onChange={e => setUser(e.target.value)} />
      <button type='button' onClick={handleLogin}>Log in</button>
    </div>
  );
};

export  function useAuth() {
  const [authed, setAuthed] = useLocalStorage('auth', null);
  useEffect(() => {
    console.log('Auth.jsx::[25]', authed)
  }, [authed])

  return {
    authed,
    login(user) {
      console.log('useAuth[9]:user ', user)
      return new Promise((res) => {
        setAuthed(user);
        res(user);
      });
    },
    logout() {
      console.log('useAuth[9]:logout'  )
      return new Promise((res) => {
        setAuthed(null);
        res(null);
      });
    },
  };
}

const authContext = createContext({});

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}


export function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();
  return authed ? children : <Navigate to="/login" replace state={{ path: location.pathname }}/>;
}



/**
 *
 * @param {*} key
 * @param {*} initialValue
 * @returns
 * @src https://usehooks.com/useLocalStorage/
 * @example 
    const [authed, setAuthed] = useLocalStorage('auth', null);
 * 
 */
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      // console.log('useLocalStorage.js::[21] error', error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error, value)
    }
  }
  return [storedValue, setValue, key]
}
