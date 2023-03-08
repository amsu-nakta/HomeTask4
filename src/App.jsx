// import { useState } from "react";
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro from './components/Intro/Intro';
import About from './components/About';
import Success from './components/Success';
import Completed from './components/Completed';
import Reviews from './components/Reviews';
import News from './components/News';
import Subscribe from './components/Subscribe';
import Form from './components/Subscribe/inex';

export default function App() {
  return (
    <ParallaxProvider>
      <div>
        <Nav />
        <Intro />
        <About />
        <Success />
        <Completed />
        <Reviews />
        <News />
        <Form />
        <Footer />
      </div>

    </ParallaxProvider>
  );
}
