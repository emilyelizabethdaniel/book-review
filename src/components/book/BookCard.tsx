
import React from 'react';
import { BookModel } from '../../model/BookModel';
import BookForm from './BookForm';
import BookView from './BookView';


interface BookCardProps {
  book: BookModel
  newBook?: boolean
}

const BookCard: React.FC<BookCardProps> = (props) => {
  return props.newBook 
    ? <BookForm book={props.book} /> 
    : <BookView book={props.book} />
}

export default BookCard;