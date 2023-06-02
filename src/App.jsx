import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallary from './components/Gallary';
import Teacher from './components/Teacher';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Gallary></Gallary>
      <Teacher></Teacher>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default App;