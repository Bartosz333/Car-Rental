import { Container } from 'react-bootstrap';
import { Header } from './components/views/Header/Header';
import { Footer } from './components/views/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { PassengerCars } from './components/pages/PassengerCars/PassengerCars';
import { CommercialCars } from './components/pages/CommercialCars/CommercialCars';
import { NotFound } from './components/views/NotFound';
import { Contact } from './components/views/Contact/Contact';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/passenger' element={<PassengerCars />}></Route>
        <Route path='/commercial' element={<CommercialCars />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Header />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
