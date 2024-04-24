import './App.css'
import Routes from './routes/index';
import NavBarMenu from './components/NavBarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBarMenu />
      <Routes />
    </>
  )
}

export default App
