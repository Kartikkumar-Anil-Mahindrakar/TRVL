import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/services" exact element={<Services/>} />
            <Route path="/products" exact element={<Product/>} />
            <Route path="/sign-up" exact element={<SignUp/>} />
          </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
