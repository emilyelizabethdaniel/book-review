import React from 'react';
// import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { Link, redirect, useNavigate } from "react-router-dom";

import Navigation from '../appComponents/NavBar';

function homepage() {
    return ( 
        <div className="">
        <h1> Welcome to your book tracker! </h1>
        <Link to="/addBook">add a book</Link>
        <Link to="/yourBooks">see your book</Link>
        {/* <Button onClick={ ()=> useNavigate('/yourBooks')}>See your books</Button> */}
        </div>
     );
}

export default homepage;