import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";

const Detail = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    catagory: ""
  });
  const { id } = useParams();

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
      <Link to={"/"}>Back</Link>
      <h3>User Details</h3>
      <div className='addUserForm'>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input type="text" value={user.fname} id="fname" name="fname" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input type="text" value={user.lname} id="lname" name="lname" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">Phone</label>
          <input type="phone" value={user.phone} id="phone" name="phone" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" value={user.email} id="email" name="email" readOnly />
        </div>
        <div className="inputGroup">
          <label htmlFor="catagory">Category</label>
          <input type="text" value={user.catagory} id="catagory" name="catagory" readOnly />
        </div>
      </div>
    </div>
  );
};

export default Detail;
