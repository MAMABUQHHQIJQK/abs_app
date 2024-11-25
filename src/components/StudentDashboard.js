import React, { useState } from 'react';

function StudentDashboard() {
  const [absences] = useState([
    { date: '2024-10-01', subject: 'Mathématiques' },
    { date: '2024-10-15', subject: 'Physique' },
  ]);

  return (
    <div>
      <h1>Bienvenue, Étudiant</h1>
      <h2>Mes Absences</h2>
      <ul>
        {absences.map((absence, index) => (
          <li key={index}>
            {absence.date} - {absence.subject}
          </li>
        ))}
      </ul>
      <p><strong>Total :</strong> {absences.length} absence(s)</p>
    </div>
  );
}

export default StudentDashboard;
