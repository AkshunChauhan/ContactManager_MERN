import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';

import UserDetails from './components/userdetails/UserDetails'; // Import UserDetails component

function App() {
  return (
    <div className="App">
      {/* Router component to enable routing */}
      <Router>
        {/* Routes component to define routes */}
        <Routes>
          {/* Route for the home page (list of users) */}
          <Route path="/" element={<User />} />
          {/* Route for adding a new user */}
          <Route path="/add" element={<Add />} />
          {/* Route for editing an existing user */}
          <Route path="/add/:id" element={<Add />} />
          {/* Route for displaying user details */}
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
