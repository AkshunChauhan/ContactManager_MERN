import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './add.css';
import toast from 'react-hot-toast';

const Add = () => {
  // Initial state for user data
  const initialUserState = {
    fname: '',
    lname: '',
    email: '',
    phone: '', // Added phone field
    catagory: ''
  };

  // State for user data and navigation
  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  // Function to handle input changes
const inputHandler = (e) => {
  const { name, value } = e.target;
  // Validate phone field to accept only numbers and exactly 10 digits
  if (name === 'phone' && !/^\d{10}$/.test(value)) {
      // Show validation error message if input is invalid
      toast.error('Please enter a 10-digit phone number', { position: 'top-right' });
  } else {
      setUser({ ...user, [name]: value });
  }
};

  // Function to submit form
  const submitForm = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!user.fname || !user.lname || !user.email || !user.phone || !user.catagory) {
      // If any field is empty, show an error toast
      toast.error('All fields are required', { position: 'top-right' });
      return; // Exit function early
    }

    try {
      // Send POST request to create user
      const response = await axios.post('http://localhost:8000/api/create', user);
      // Show success toast
      toast.success(response.data.msg, { position: 'top-right' });
      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.log(error);
      // Show error toast if request fails
      toast.error('Error adding user', { position: 'top-right' });
    }
  };

  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add new user</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        {/* Input fields for user data */}
        <div className='inputGroup'>
          <label htmlFor='fname'>First name</label>
          <input type='text' onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First name' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='lname'>Last name</label>
          <input type='text' onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='phone'>Phone</label>
          <input type='text' onChange={inputHandler} id='phone' name='phone' autoComplete='off' placeholder='phone' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='catagory'>Catagory</label>
          <select onChange={inputHandler} id='catagory' name='catagory'>
            <option value=''>Select category</option>
            <option value='Family'>Family</option>
            <option value='Friend'>Friend</option>
            <option value='Work'>Work</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        {/* Button to submit form */}
        <div className='inputGroup'>
          <button type='submit'>ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
