import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import About from './Components/About';
import Menu from './Components/Menu';
import BookingPage from './Components/BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
     <Route exact path='/' element={<Main/>} />
     <Route exact path='/about' element={<About/>}/>
     <Route exact path='/menu' element={<Menu/>}/>
     <Route exact path='/book' element={<BookingPage/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
