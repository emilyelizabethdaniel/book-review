import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from '../pages/homepage';
import BrowseBooks from '../pages/browseBooks';
import Profile from '../pages/profile';
import AddBook from '../pages/addBook';
import EditBook from '../pages/editBook';
import Navigation from '../layout/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Routes>
          <Route path="/" element={ <Homepage/> } />
          <Route path="/addBook" element={ <AddBook/> } />
          <Route path="/yourBooks" element={ <EditBook/> } />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/browseBooks" element={<BrowseBooks/>} />
        </Routes>
    </div>
  );
}

export default App;
