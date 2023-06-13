import React from 'react';
import BookCard from '../book/BookCard';
import Navigation from '../layout/NavBar';
import { BookModel } from '../../model/BookModel';


const book: BookModel = {
    title: "The Windup Bird Chronicle",
    author: 'Hakuri Murakami',
    review: 'this is the review',
    stars: 1
}

function EditBook() {
    return (
        <div>
            <h1>Your Books</h1>
            <BookCard book={book}
            />
        </div>
    );
}

export default EditBook;