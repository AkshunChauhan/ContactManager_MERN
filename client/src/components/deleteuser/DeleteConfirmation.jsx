import React from 'react';
import "./delete.css";

const DeleteConfirmation = ({ onCancel, onConfirm }) => {
  return (
    <div className="delete-confirmation">
      <div className="confirmation-box">
        {/* Confirmation message */}
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this user?</p>
        {/* Buttons for confirmation */}
        <div className="buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
