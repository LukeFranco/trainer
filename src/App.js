import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Clock from './components/Clock';


function App() {
  return (
    <div>  
      <Header />
      <Sidebar />
      <Clock /> 
      <Footer />
    </div>
  );
}

export default App;