import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="justify-content-md-center">
          <Col>
            <Form.Label>¿Quién eres?: </Form.Label>
            <select {...register("¿Quién eres?", { required: true })}>
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
              {...register("Cedula", { required: true, max: 8, min: 5 })}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center" md="auto">
          <Col>
            <label>Nombres: </label>
            <input
              type="text"
              placeholder="Nombres"
              {...register("Nombres", { required: true })}
            /><input
            type="text"
            placeholder="Apellidos"
            {...register("Apellidos", { required: true })}
          />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <label>Email: </label>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <label>Teléfono de contacto: </label>
            <input
              type="tel"
              placeholder="Teléfono de contacto"
              {...register("Teléfono de contacto", { required: true })}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <input type="submit" />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default RegisterForm;
