import React from 'react';
import './index.css'

import BookContextProvider from "./components/Book/BookContext";
import BookList from "./components/Book/BookList";
import BookAdd from "./components/Book/BookAdd";

import CounterReducer from "./components/CounterReducer";
import TodoComponent from "./components/TodoReducer";
import Songs from "./components/SongFnReducer/Songs";
import SongContextProvider from "./components/SongFnReducer/SongContext";


function App() {
  return (
    <div>

      <SongContextProvider>
        <Songs/>
      </SongContextProvider>

      {/*<BookContextProvider>*/}
      {/*  <BookList/>*/}
      {/*  <BookAdd/>*/}
      {/*</BookContextProvider>*/}

      {/*<TodoComponent/>*/}
      {/*<CounterReducer/>*/}
    </div>
  );
}

export default App;
