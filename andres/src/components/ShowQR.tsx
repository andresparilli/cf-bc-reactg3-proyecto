import studentsData from '../data/students.json';
import { useParams } from 'react-router-dom';

interface StudentQR {
  studentId: string;
  email: string;
  fname: string;
  lname: string;
  phone: string;
  rsvp: string;
  type: string;
  source: string;
  sourcenote: string;
}

const ShowQR = () => {
  const { studentId } = useParams<{ studentId: string }>(); // Ensure studentId is a string

  const studentData = studentsData as StudentQR[]; // Cast studentsData to StudentQR array
  const student: StudentQR | undefined = studentData.find((student) => student.studentId === studentId);

  if (!student) {
    return <div>Estudiante no encontrado</div>;
  }

  return (
    <>
      <br />
      <h2>{student.rsvp}</h2><br />
      <div>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${student.email}&size=200x200`}
          alt={student.fname}
          title={student.fname}
        />
      </div>
      <div>{student.fname} {student.lname}</div>
      <div>{student.email}</div><br />
      <h3>Información de contacto</h3>
      <div>Tipo de contacto: {student.type}</div>
      <div>Teléfono de contacto: {student.phone}</div><br />
      <h3>Marketing</h3>
      <div>Source: {student.source}</div>
      <div>Sorce note: {student.sourcenote}</div>
    </>
  );
};

export default ShowQR;
