import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function Signup() {
  const handleCancel = () => {
    alert("You have cancelled the signup process.");
    
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <form>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

        <label>
          <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: "15px" }} /> Remember me
        </label>

        <p>
          By creating an account, you agree to our{" "}
          <Link to="/terms" style={{ color: "dodgerblue" }}>Terms & Privacy</Link>.
        </p>

        <div className="clearfix">
          <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="signupbtn">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
