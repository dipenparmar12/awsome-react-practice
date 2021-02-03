import React, {PropsWithChildren, useContext} from "react";
import {BookContext} from "./BookContext";
import {BookContextType} from "./BookType";
import BookDetail from "./BookDetail";

const BookList: React.FunctionComponent = (props: PropsWithChildren<any>) => {
  const {books, /*bookAdd, bookDelete, bookEdit*/} = useContext<BookContextType>(BookContext);
  
  return (
    <div className='book-list'>
      <ul>
        {books.map(book => {
          return <BookDetail key={book.id} book={book}/>
        })}
      </ul>
    </div>
  )
}

export default BookList;