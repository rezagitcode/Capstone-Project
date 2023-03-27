import './App.css';
import Header from './Components/Header';
import {Main} from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Main/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
