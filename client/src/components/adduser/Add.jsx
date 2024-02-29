import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './add.css';
import toast from 'react-hot-toast';

const Add = () => {
  const initialUserState = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    catagory: '',
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let errorMessage = ''; // Initialize error message
  
    // Validate phone field to accept only numbers and maximum 10 digits
    if (name === 'phone') {
      // Remove any non-digit characters
      newValue = value.replace(/\D/g, '');
      // Limit to maximum 10 digits
      newValue = newValue.slice(0, 10);
      
      // Check if the phone number is exactly 10 digits
      if (newValue.length !== 10) {
        toast.error('Please enter a 10-digit phone number', { position: 'top-right' });
      }
    }
  
    // Update user state with the new value and error message
    setUser({ ...user, [name]: newValue });
  };
  

  const submitForm = async (e) => {
    e.preventDefault();

    if (!user.fname || !user.lname || !user.email || !user.phone || !user.catagory) {
      toast.error('All fields are required', { position: 'top-right' });
      return;
    }

    try {
      let response;
      if (id) {
        response = await axios.put(`http://localhost:8000/api/update/${id}`, user);
      } else {
        response = await axios.post('http://localhost:8000/api/create', user);
      }
      toast.success(response.data.msg, { position: 'top-right' });
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Error adding/updating user', { position: 'top-right' });
    }
  };

  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>{id ? 'Update user' : 'Add new user'}</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor='fname'>First name</label>
          <input type='text' value={user.fname} onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='First name' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='lname'>Last name</label>
          <input type='text' value={user.lname} onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='Last name' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='phone'>Phone</label>
          <input type='text' value={user.phone} onChange={inputHandler} id='phone' name='phone' autoComplete='off' placeholder='phone' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' value={user.email} onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='Email' />
        </div>
        <div className='inputGroup'>
          <label htmlFor='catagory'>Category</label>
          <select value={user.catagory} onChange={inputHandler} id='catagory' name='catagory'>
            <option value=''>Select category</option>
            <option value='Family'>Family</option>
            <option value='Friend'>Friend</option>
            <option value='Work'>Work</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className='inputGroup'>
          <button type='submit'>{id ? 'UPDATE USER' : 'ADD USER'}</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
