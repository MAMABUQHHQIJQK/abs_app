import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [role, setRole] = useState('student'); // 'student' ou 'teacher'
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'student') {
      navigate('/student');
    } else if (role === 'teacher') {
      navigate('/teacher');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Étudiant</option>
        <option value="teacher">Professeur</option>
      </select>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default Login;
