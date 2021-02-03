import {v4 as uuid} from "uuid";

export default interface BookType {
  title: string,
  author: string,
  id: any
}

export interface BookContextType {
  books: BookType[],
  bookAdd: (book: BookType | any) => void,
  bookDelete?: (id: string | number) => void,
  // bookEdit?: (e: React.FormEvent<HTMLFormElement>) => void,

  // bookAdd: any,
  // bookDelete: any,
  // bookEdit: any,
}

export class BookClass implements BookType {
  title: string;
  author: string;
  id: any;

  constructor(title: string, author: string, id: any = false) {
    this.title = title;
    this.author = author;
    this.id = id ? id : uuid();
  }
}
