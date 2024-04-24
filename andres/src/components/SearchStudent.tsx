import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const SearchStudent = () => {
    const [search, setSearch] = useState('');
    
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value);
    }
    const handleSubmit = () => {
        alert(search);
    }

    return (

        <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control type="search" placeholder="Buscar" className="me-4" aria-label="Buscar"  onChange={handleInputChange} value={search}/>
            <Button type="submit" variant="outline-success bg-dark">Buscar</Button>
        </Form>
    );
};

export default SearchStudent;