import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (

        <Container className="p-3">
      <Card>
        <Card.Img variant="top" src="../assets/react.svg" />
        <Card.Body>
          <Card.Text>
            "Somos tu one stop de estudios en el exterior."
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>

    );
};

export default Home;