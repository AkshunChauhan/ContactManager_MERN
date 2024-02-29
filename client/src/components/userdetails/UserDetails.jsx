import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";

const Detail = () => {
  // State to hold user data
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    catagory: ""
  });

  // Extracting ID from URL parameters
  const { id } = useParams();

  // Fetch user data from the server upon component mount
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className='addUser'>
      {/* Link to navigate back to the home page */}
      <Link to={"/"}>Back</Link>
      {/* Title */}
      <h3>User Details</h3>
      <div className='addUserForm'>
        {/* Form to display user details */}
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          {/* Input field for first name */}
          <input type="text" value={user.fname} id="fname" name="fname" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          {/* Input field for last name */}
          <input type="text" value={user.lname} id="lname" name="lname" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone</label>
          {/* Input field for phone number */}
          <input type="phone" value={user.phone} id="phone" name="phone" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          {/* Input field for email */}
          <input type="email" value={user.email} id="email" name="email" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="catagory">Category</label>
          {/* Input field for category */}
          <input type="text" value={user.catagory} id="catagory" name="catagory" readOnly />
        </div>
      </div>
    </div>
  );
};

export default Detail;
