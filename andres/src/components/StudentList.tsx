import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'; // Use useEffect for cleaner loading logic
import { useNavigate } from 'react-router-dom';
import checkboxChecked from '../assets/checkbox-checked-svgrepo-com.svg';
import checkboxUnchecked from '../assets/checkbox-unchecked-svgrepo-com.svg';
import styles from './StudentList.module.css';
import studentsData from '../hooks/useStudentsData.js'; // Assuming useStudentsData fetches data

const StudentList = () => {
  const { students, isLoading, error } = studentsData();
  console.log(students);
  const navigate = useNavigate();

  useEffect(() => {
    // No need to modify this block if using useStudentsData
  }, []);

  const handleSeeButton = (id) => {
    navigate(`/Student/${id}`);
  };

  const handleCheckBox = (id) => {
    toggleCheckBox(id);
  };

  // Handle errors and empty data (optional)
  if (error) {
    return <div>Error fetching students: {error.message}</div>;
  }

  if (!students.length) {
    return <div>No students found.</div>;
  }

  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Ver QR</th>
          <th>Asistente</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="6" className={styles.loading}>
              Cargando registrados...
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.fname}</td>
              <td>{student.lname}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <button onClick={() => handleSeeButton(student.studentId)}>
                  Ver
                </button>
              </td>
              <td>
                <img
                  src={isAssitantChecked ? checkboxChecked : checkboxUnchecked}
                  alt="Ausente"
                  className={styles.checkboximg}
                  onClick={() => handleCheckBox(student.studentId)}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default StudentList;
