import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>  
      <Header />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;