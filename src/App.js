import { useState , useEffect } from 'react';
import './App.css';
import './sass/style-en.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';


function App() {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 1);
   });
 }, []);
  return (
    <div className="App">
      <div className={scroll ? "scroll" : "top"}>
        <div className="main-wrapper">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
     </div>
  );
}

export default App;
