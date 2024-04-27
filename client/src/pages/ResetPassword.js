import React, { useState } from 'react';
import Navbar1 from '../components/Navbar1';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      setMessage('Password successfully reset!');
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div>
      <div className='navbar'>
        <Navbar1 />
      </div>
      <div className='remaining'>
        <h2 style={{ textAlign: 'center', color: 'blue' }}>Reset Password</h2>
        <label>
          Old Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br /><br/>
        <label>
          New Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br /><br/>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br /><br/>
        <button onClick={handleResetPassword}>Reset Password</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ResetPassword;
