import React, {useEffect} from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { authService } from './Services/Auth';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    authService.setToken(token);
  }, [])
  return (
    <React.Fragment>
        <Navbar />
        <Footer />
    </React.Fragment>
  );
}

export default App;
