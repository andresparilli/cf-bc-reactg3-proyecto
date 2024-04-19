import React from 'react'; // Add React import
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface RegisterFormData {
  role: string;
  cedula: string;
  fname: string;
  lname: string;
  email: string;
  movil: string;
}

// Explicitly specify component props and return type
const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  // Define types for onSubmit parameters and return value
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row className="justify-content-md-center">
          <Col>
            <Form.Label>¿Quién eres?: </Form.Label>
            <select {...register("role", { required: true })}>
              <option value="Estudiante">Estudiante</option>
              <option value="Padre">Padre</option>
            </select>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Form.Label>Cédula: </Form.Label>
            <input
              type="text"
              placeholder="Cedula"
              {...register("cedula", { required: true, max: 8, min: 5 })}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center" md="auto">
          <Col>
            <label>Nombres: </label>
            <input
              type="text"
              placeholder="Nombres"
              {...register("fname", { required: true })}
            /><input
            type="text"
            placeholder="Apellidos"
            {...register("lname", { required: true })}
          />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <label>Email: </label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <label>Teléfono de contacto: </label>
            <input
              type="tel"
              placeholder="Teléfono de contacto"
              {...register("movil", { required: true })}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <input type="submit" />
          </Col>
        </Row>
      </form>
      <ul>
          {Object.keys(errors).map((field) => (
  <li key={field}>
    {field}: {errors[field]?.message}
  </li>
))}
    </ul>
    </Container>
  );
};

export default RegisterForm;
