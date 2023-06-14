import React from 'react';
// import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { Link, redirect, useNavigate } from "react-router-dom";
import ActiveBook from './activeBook';

import Navigation from '../layout/NavBar';

function homepage() {
    return ( 
        <div className="">
        <h1> Welcome to your book tracker! </h1>
        <Link to="/addBook">add a book</Link>
        <Link to="/yourBooks">see your book</Link>
        <ActiveBook title="Pachinko" author="Min Jin Lee" review="dd" stars={5}/>
        {/* <Button onClick={ ()=> useNavigate('/yourBooks')}>See your books</Button> */}
        </div>
     );
}

export default homepage;