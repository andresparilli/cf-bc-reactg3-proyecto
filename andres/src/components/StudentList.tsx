import Table from 'react-bootstrap/Table';
import studentsData from '../data/students.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkboxChecked from '../assets/checkbox-checked-svgrepo-com.svg';
import checkboxUnchecked from '../assets/checkbox-unchecked-svgrepo-com.svg';
import styles from './StudentList.module.css';

const students = studentsData;

const StudentList = () => {

  const navigate = useNavigate();

const handleSeeButton = (id) => {   
    navigate(`/Student/${id}`);
  };



  const [value, setValue] = useState(0);
  setTimeout(()=>{
    setValue(value + 1) 
  },1000);
  if (value < 2) {
    return <div>Cargando registrados...</div>;
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
        {students.map((student) => (
          <tr key={student.studentId}>
            <td>{student.fname}</td>
            <td>{student.lname}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td><button onClick={() => handleSeeButton(student.studentId)}>Ver</button>
            </td>
            <td><img src={checkboxUnchecked} alt="Ausente" className={styles.checkboximg}/></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
