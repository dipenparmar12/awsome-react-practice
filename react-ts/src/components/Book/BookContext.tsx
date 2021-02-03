import React, {PropsWithChildren, useState} from "react";
import BookType, {BookContextType} from "./BookType";
import {v4} from "uuid";

export const BookContext = React.createContext<BookContextType>(undefined!);

const BookContextProvider: React.FunctionComponent = (props: PropsWithChildren<any>) => {
  const [books, setBooks] = useState<BookType[]>([
    {title: 'Book One', author: 'dipen', id: v4()},
    {title: 'Coding with Ts', author: 'Hitesh', id: v4()},
  ])

  const bookAdd = (book: BookType) => {
    setBooks([...books, book])
  }

  const bookDelete = (id: string | number): void => {
    setBooks(books.filter(book => book.id !== id))
  }

  // const bookEdit = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   e.preventDefault()
  //   console.log("bookEdit :::", bookAdd)
  // }

  return (
    <BookContext.Provider value={{books, bookAdd, bookDelete}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;