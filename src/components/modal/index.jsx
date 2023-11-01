import React from "react";
import "./modal.css";
import "bootstrap/dist/css/bootstrap.css";

export const EditModal = (props) => {
  console.log(props);
 
  return (
    <div className="modalBackground">
      <div className="editModal bg-secondary rounded-4">
        <div className="modalInputs h-100">
          <input placeholder="Fullname" name="fullname" type="text" />
          <input placeholder="Age" name="age" type="number" />
          <input placeholder="Position" name="position" type="text" />
          <input placeholder="Phone number" name="phoneNumber" type="number" />
          <button className="btn btn-danger">Close</button>
          <button className="btn btn-warning">Save</button>
        </div>
      </div>
    </div>
  );
};
