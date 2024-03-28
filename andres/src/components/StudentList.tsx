import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const students = [
  {
    "Email": "analiaduarteg@gmail.com",
    "Name": "Analía",
    "LName": "Duarte Gálvez",
    "Mobile": "595991712840",
    "tipo": "Estudiante"
   },
   {
    "Email": "anamariabolftalavera@gmail.com",
    "Name": "Anamaria",
    "LName": "Bolf",
    "Mobile": "595981739944",
    "tipo": "Estudiante"
   },
   {
    "Email": "belunlole92@gmail.com",
    "Name": "??????",
    "LName": "???????",
    "Mobile": "595992966232",
    "tipo": "Estudiante"
   },
   {
    "Email": "Claumongelos@gmail.com",
    "Name": "Claudia",
    "LName": "Mongelos",
    "Mobile": "595991555555",
    "tipo": "Padre"
   },
   {
    "Email": "ddanhalujan@gmail.com",
    "Name": "Danha",
    "LName": "Diaz",
    "Mobile": "595991192635",
    "tipo": "Estudiante"
   },
   {
    "Email": "doctora07@gmail.com",
    "Name": "María Rosa Araujo",
    "LName": "G",
    "Mobile": "595971177040",
    "tipo": "Padre"
   },
   {
    "Email": "fernandezvictoriamagali94@gmail.com",
    "Name": "Victoria Fernández",
    "LName": "Sosa",
    "Mobile": "595984143219",
    "tipo": "Estudiante"
   },
   {
    "Email": "gabyafleitas@gmail.com",
    "Name": "Gabriela",
    "LName": "Fleitas",
    "Mobile": "595975153335",
    "tipo": "Estudiante"
   },
   {
    "Email": "gacasaccia@hotmail.com",
    "Name": "Sonnia carolina",
    "LName": "Spezzini",
    "Mobile": "595982898228",
    "tipo": "Padre"
   },
   {
    "Email": "giovivannaingolotti@hotmail.com",
    "Name": "Vicky",
    "LName": "Ingolotti",
    "Mobile": "595982873524",
    "tipo": "Padre"
   },
   {
    "Email": "gloriayum04@gmail.com",
    "Name": "Maria Gloria",
    "LName": "Cañiza",
    "Mobile": "595992889415",
    "tipo": "Padre"
   },
   {
    "Email": "guteconomistpy@gmail.com",
    "Name": "Jonathan",
    "LName": "Garcia",
    "Mobile": "595991208662",
    "tipo": "Estudiante"
   },
   {
    "Email": "ilseroa07@gmail.com",
    "Name": "Ilse Roa \/Beauty",
    "LName": "Influecer",
    "Mobile": "595981693873",
    "tipo": "Padre"
   },
   {
    "Email": "ivanrojasraggio@gmail.com",
    "Name": "Iván",
    "LName": "Gabriel",
    "Mobile": "595991326217",
    "tipo": "Estudiante"
   },
   {
    "Email": "jadiyi350@gmail.com",
    "Name": "Jadistier",
    "LName": "González",
    "Mobile": "982161758",
    "tipo": "Estudiante"
   },
   {
    "Email": "loren.vise22@gmail.com",
    "Name": "Marta",
    "LName": "ortiz",
    "Mobile": "595985541710",
    "tipo": "Padre"
   },
   {
    "Email": "lore_fer66@hotmail.com",
    "Name": "Lorena",
    "LName": "Fernandez",
    "Mobile": "595981966830",
    "tipo": "Padre"
   },
   {
    "Email": "lucasmanuel1705@gmail.com",
    "Name": "Lucas",
    "LName": "Manuel",
    "Mobile": "595984150562",
    "tipo": "Estudiante"
   },
   {
    "Email": "lucasnatanaelflorentin@gmail.com",
    "Name": "Florentin",
    "LName": "Lucas",
    "Mobile": "595981743511",
    "tipo": "Estudiante"
   },
   {
    "Email": "mariadelpilarcantero@gmail.com",
    "Name": "Marita",
    "LName": "Cantero",
    "tipo": "Padre"
   },
   {
    "Email": "marianabrescia2004@hotmail.com",
    "Name": "Mariana",
    "LName": "Brescia",
    "Mobile": "595981181896",
    "tipo": "Padre"
   },
   {
    "Email": "miryambalotta19@gmail.com",
    "Name": "Miryam",
    "LName": "Balotta",
    "Mobile": "595992670084",
    "tipo": "Padre"
   },
   {
    "Email": "monsecanteroaguero@gmail.com",
    "Name": "Monse",
    "LName": "Cantero",
    "Mobile": "595971166250",
    "tipo": "Estudiante"
   },
   {
    "Email": "olgagiem@hotmail.com",
    "Name": "Maria Olga",
    "LName": "Gimenez",
    "Mobile": "595981258802",
    "tipo": "Padre"
   },
   {
    "Email": "pameoctubre17@gmail.com",
    "Name": "Pamela",
    "LName": "Villalba Santa Cruz",
    "Mobile": "595962117473",
    "tipo": "Padre"
   },
   {
    "Email": "paolainsfran80@gmail.com",
    "Name": "Paola Insfrán",
    "LName": "Alborno",
    "Mobile": "595981432804",
    "tipo": "Padre"
   },
   {
    "Email": "rdimartino@webxprs.com",
    "Name": "Rosa Elena",
    "LName": "Di Martino",
    "Mobile": "595986100750",
    "tipo": "Padre"
   },
   {
    "Email": "reynaldofl@hotmail.com",
    "Name": "Reinaldo Rafael",
    "LName": "Ferreira López",
    "Mobile": "595971696003",
    "tipo": "Padre"
   },
   {
    "Email": "rodasjulieta077@gmail.com",
    "Name": "Julieta",
    "LName": "Rodas",
    "Mobile": "986667726",
    "tipo": "Estudiante"
   },
   {
    "Email": "saharycubilla@icloud.com",
    "Name": "•Sahy",
    "LName": "Cubilla",
    "Mobile": "595976317804",
    "tipo": "Estudiante"
   },
   {
    "Email": "samuel.sanchez741@gmail.com",
    "Name": "Samuel",
    "LName": "Sanchez",
    "Mobile": "595981432278",
    "tipo": "Estudiante"
   },
   {
    "Email": "stefy2307@hotmail.com",
    "Name": "Stefany",
    "LName": "Santander",
    "Mobile": "595981604321",
    "tipo": "Padre"
   },
   {
    "Email": "Tamarawagnerb9@gmail.com",
    "Name": "Tamara",
    "LName": "Wagner",
    "Mobile": "595971708776",
    "tipo": "Estudiante"
   },
   {
    "Email": "Tatyflo07@gmail.com",
    "Name": "Tatyana",
    "LName": "Florentin",
    "Mobile": "981823170",
    "tipo": "Estudiante"
   },
   {
    "Email": "uniamericanamili@gmail.com",
    "Name": "????????",
    "LName": "??????",
    "Mobile": "982987876",
    "tipo": "Estudiante"
   }
];


const StudentList = () => {

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
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.Email}>
            <td>{student.Name}</td>
            <td>{student.LName}</td>
            <td>{student.Email}</td>
            <td>{student.Mobile}</td>
            <td>Ver</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
