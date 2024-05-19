import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Index from './routes';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min-height'> 
         <Index />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
