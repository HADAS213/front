import React, { useState } from 'react';

function PersonalArea(props) {
  const [user, setUser] = useState({
    name: props.name,
    email: props.email,
    password:props.password,
    phone:props.phone,
    birth_date:props.birth_date,
    info:props.info,
    img_url:props.img_url
    // Add other user details here
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions to update the user details
    console.log('Updated user:', user);
  };

  return (
    <div>
      <h2>Edit Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={props.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            value={props.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Birth date:
          <input
            type="date"
            name="birth_date"
            value={props.birth_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Info:
          <input
            type="text"
            name="info"
            value={props.info}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        Img_url:
          <input
            type="text"
            name="img_url"
            value={props.img_url}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Add other input fields for additional user details */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default PersonalArea;