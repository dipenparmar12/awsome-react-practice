import React, {useContext} from "react";
import BookType, {BookContextType} from "./BookType";
import {BookContext} from "./BookContext";

interface BookDetailProps {
  book: BookType,
  key: any
}

const BookDetail: React.JSXElementConstructor<BookDetailProps> = ({book}) => {
  // console.log("BookDetail-props::", book)
  const {bookDelete} = useContext<BookContextType>(BookContext);

  return (
    <li key={book.id} onClick={() => bookDelete ? bookDelete(book.id) : null}>
      <div className='title'> {book.title} </div>
      <div className='author'>author: {book.author} </div>
    </li>
  )
}

export default BookDetail