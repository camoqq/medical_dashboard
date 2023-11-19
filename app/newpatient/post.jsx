import React from "react";

const Post = ({
  setnewName,
  setnewPhone,
  setnewDob,
  setnewAddress,
  onSubmit,
}) => {
  return (
    <div className="newp">
      <div className="form">
        <p>Name</p>
        <input type="text" onChange={(e) => setnewName(e.target.value)} />
      </div>
      <div className="form">
        <p>Phone number</p>
        <input type="text" onChange={(e) => setnewPhone(e.target.value)} />
      </div>
      <div className="form">
        <p>Date of Birth</p>
        <input type="date" onChange={(e) => setnewDob(e.target.value)} />
      </div>
      <div className="form">
        <p>Address</p>
        <input type="text" onChange={(e) => setnewAddress(e.target.value)} />
      </div>
      <div className="form">
        <button onClick={onSubmit}>Add</button>
      </div>
    </div>
  );
};

export default Post;
