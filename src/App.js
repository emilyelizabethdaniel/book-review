import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pageComponents/homepage';
import BrowseBooks from './pageComponents/browseBooks';
import Profile from './pageComponents/profile';
import AddBook from './pageComponents/addBook';
import EditBook from './pageComponents/editBook';
import Navigation from './appComponents/NavBar';
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
