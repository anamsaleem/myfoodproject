'use client'
import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;


// LocalDBExample.js
/*'use client'
import React, { useState } from 'react';
import LoginModal from '@/components/login'; // Import the LoginModal component
import UserManagement from '@/components/UserManagement';// Import the UserManagement component

const LocalDBExample = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      <h1>Local Database Example</h1>
      /* Your existing content */
     /* <button onClick={() => setShowLoginModal(true)}>Open Login Modal</button>
      <UserManagement />
       /* User management component */
      /*<LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
};

export default LocalDBExample;*/