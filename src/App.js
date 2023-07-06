import { Container } from 'react-bootstrap';
import { Header } from './components/views/Header/Header';
import { Footer } from './components/views/Footer/Footer';
import { Routes } from 'react-router-dom';
import { NavBar } from './components/views/NavBar/NavBar';
function App() {
  return (
    <Container>
      <Header>
        <Routes></Routes>
      </Header>
      <NavBar />
      <Footer />
    </Container>
  );
}

export default App;
