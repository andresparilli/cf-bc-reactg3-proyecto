import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Logo from '../assets/THE_U_FOR_YOU_LOGO_TRANSPARENCIA_9.png';
import styles from './home.module.css';

const Home = () => {
    return (

        <Container className="p-6">
      <Card>
        <Card.Img src={Logo} className={styles.logo} />
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