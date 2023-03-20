import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>

    <Header/>
    <Routes>
     <Route exact path='/' element={<Main/>} />
     <Route exact path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
