import React from 'react';

//Components
import Header from './layout/Header/Header'
import Navbar from './components/composed/Navbar/Navbar';
import SalesList from './components/composed/SalesList/SalesList';

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App= () => {
  return(
    <div class="container">
      <Header />
      <Navbar />
      <SalesList />
    </div>

  );
}


export default App;
