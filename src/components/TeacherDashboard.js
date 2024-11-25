import React, { useState } from 'react';

function TeacherDashboard() {
  const [students] = useState([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sarra' },
    { id: 3, name: 'Mehdi' },
  ]);
  const [absences, setAbsences] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');

  const addAbsence = () => {
    if (selectedStudent && subject && date) {
      setAbsences([
        ...absences,
        { student: selectedStudent, subject, date },
      ]);
      setSelectedStudent('');
      setSubject('');
      setDate('');
    }
  };

  return (
    <div>
      <h1>Bienvenue, Professeur</h1>
      <h2>Marquer une Absence</h2>
      <select
        value={selectedStudent}
        onChange={(e) => setSelectedStudent(e.target.value)}
      >
        <option value="">Sélectionner un étudiant</option>
        {students.map((student) => (
          <option key={student.id} value={student.name}>
            {student.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Matière"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addAbsence}>Ajouter</button>

      <h2>Historique des Absences</h2>
      <ul>
        {absences.map((absence, index) => (
          <li key={index}>
            {absence.date} - {absence.subject} - {absence.student}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherDashboard;
