import './App.css';
import About from './component/about/about';
import Different from './component/different/different';
import Footer from './component/footer/footer';
import Hero from './component/hero/hero';
import Navbar from './component/navbar/navbar';
import Testimonials from './component/testimonials/testimonials';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Hero/>
      <Different/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
