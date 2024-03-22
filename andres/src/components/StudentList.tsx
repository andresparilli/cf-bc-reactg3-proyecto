import Table from 'react-bootstrap/Table';
import Link from 'react-router-dom';


// Assuming you have an array of student data
const students = [
  { cedula: 1, nombres: 'Mark', apellidos: 'Otto', email: '@mdo' },
  { cedula: 2, nombres: 'Jacob', apellidos: 'Thornton', email: '@fat' },
];

const StudentList = () => {
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Cedula</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Ver QR</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.cedula}>
            <td>{student.cedula}</td>
            <td>{student.nombres}</td>
            <td>{student.apellidos}</td>
            <td>{student.email}</td>
            <td>Ver</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
