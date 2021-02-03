import React, {ChangeEvent, useContext, useState} from "react";
import {BookContext} from "./BookContext";
import BookType, {BookClass, BookContextType} from "./BookType";

const BookAdd: React.FunctionComponent = () => {
  const {bookAdd} = useContext<BookContextType>(BookContext);

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const bookSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let book: BookType = new BookClass(title, author);
    bookAdd(book)
  }

  return (
    <form onSubmit={bookSubmit} style={{display: 'flex'}}>
      <input type="text"
             value={title}
             placeholder='Book title'
             onChange={(e: ChangeEvent<HTMLInputElement>) => {
               e.preventDefault()
               setTitle(e.target.value)
             }}/>

      <input type="text"
             value={author}
             placeholder="Book author"
             onChange={(e: ChangeEvent<HTMLInputElement>) => {
               e.preventDefault()
               setAuthor(e.target.value)
             }}/>

      <button type='submit'> Add</button>
    </form>
  )
}

export default BookAdd