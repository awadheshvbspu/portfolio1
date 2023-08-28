import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/home/Home'
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Services from './component/services/Services';
import Qualification from './component/qualification/Qualification';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import ScrollUp from './component/scrollup/ScrollUp';
import Work from './component/work/Work';

function App() {
  return (
    <>
        <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonial/>
      <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;

