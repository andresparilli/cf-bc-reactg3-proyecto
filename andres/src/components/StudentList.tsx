import Table from 'react-bootstrap/Table';
import studentsData from '../data/students.json';
import { useState, useEffect } from 'react'; // Use useEffect for cleaner loading logic
import { useNavigate } from 'react-router-dom';
import checkboxChecked from '../assets/checkbox-checked-svgrepo-com.svg';
import checkboxUnchecked from '../assets/checkbox-unchecked-svgrepo-com.svg';
import styles from './StudentList.module.css';
import useCheckBox from '../hooks/useCheckBox.js';

const students = studentsData;

const StudentList = () => {
  const { isAssitantChecked, toggleCheckBox } = useCheckBox();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (students.length === 0) {
        console.warn('No student data found!'); // Or display a message to the user
      }
      setIsLoading(false);

    };

    fetchData();
  }, []);

  const handleSeeButton = (id: string) => {
    navigate(`/Student/${id}`);
  };

  const handleCheckBox = (studentId: string) => {
    toggleCheckBox(studentId); // Assuming toggleCheckBox updates state based on studentId
  };

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
            <td colSpan={6} className={styles.loading}>
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
