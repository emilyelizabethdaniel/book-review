import React from 'react';
import BookCard from '../book/BookCard';
import Navigation from '../layout/NavBar';

function EditBook() {
    return ( 
        <div>
            <h1>Your Books</h1>
            <BookCard
                title="The Wind-up Bird Chronicle"
                author="Hakuri Murakami"
                review="here are my thoughts"
                stars= {5}
                newBook={false}
            />
        </div>
     );
}

export default EditBook;