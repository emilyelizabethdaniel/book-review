import React from 'react';
import { BookModel } from '../../model/BookModel';

interface Props extends BookModel { }

const ActiveBook: React.FC<Props> = (props) => {
    return ( 
        <div className="">
            <h1>Active Books</h1>
            <ul>
                <li>{props.title}</li>
                <li>{props.author}</li>
                {/* each book is their own card, name and title with buttons to :
                - update status
                - finish book
                - write a review */}
            </ul>
        </div>
     );
}

export default ActiveBook;