import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import UserDetails from './components/userdetails/UserDetails'; // Import UserDetails component



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/user/:id" element={<UserDetails />} /> {/* New route for UserDetails */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
