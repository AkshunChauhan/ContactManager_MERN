import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import "./user.css";
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../deleteuser/DeleteConfirmation'; // Import the DeleteConfirmation component

const User = () => {
  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };
    fetchData();
  }, []);

  const deleteUser = (userId) => {
    setDeleteUserId(userId);
    setShowConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/${deleteUserId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== deleteUserId));
      toast.success("User deleted successfully", { position: 'top-right' });
    } catch (error) {
      console.log(error);
      toast.error("Error deleting user", { position: 'top-right' });
    }
    setShowConfirmation(false);
    setDeleteUserId(null);
  };

  return (
    <div className='userTable'>
      <h1>Contact Manager</h1>
      <br />
      <Link to={"/add"} className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>User Email</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/user/${user._id}`}>{user.fname}</Link> {/* Make the first name clickable */}
              </td>
              <td>{user.lname}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.catagory}</td>
              <td className='actionButtons'>
                <button onClick={() => deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                <Link to={`/edit/${user._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirmation && (
        <DeleteConfirmation
          onCancel={() => setShowConfirmation(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
};

export default User;
