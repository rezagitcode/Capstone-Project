import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <div className='head_nav'>
    <Header/>
    <Nav/>
    </div>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
