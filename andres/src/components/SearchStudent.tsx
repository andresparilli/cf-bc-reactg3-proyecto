import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchStudent = () => {
    return (

        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-4"
              aria-label="Buscar"
            />
            <Button variant="outline-success bg-dark">Buscar</Button>
        </Form>
    );
};

export default SearchStudent;