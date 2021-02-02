import React from 'react';

const Header=()=>{
    const newButtonStyle ={
      backgroundColor: "#e3d091",
      border: "none",
      margin: "10px 0 10px 10px",
      padding: 10,
    }
    const searchStyle={
     
      margin:"10px 0 10px 0",
      border: "solid 1px #91e3aa"
    }
    const goButtonStyle={
      backgroundColor: "#91e3aa",
      border:"solid 1px #91e3aa",
      margin: "10px 0 10px 0",
      padding: 10,
    }
      const logoButtonStyle={
      backgroundColor: "#B091E4",
      border:"solid 1px #B091E4",
      margin: "10px 10px 10px 0",
      padding: 10,
      textAlign: "center"
    }
    
    return (
      <header class="row justify-content-between">
  
        <a
          href="/"
          style={logoButtonStyle} 
          class="col-2"
          >MySales!
        </a> 
        <div class= "col-7">
          <div class="row justify-content-center">
            <input 
              style={searchStyle} 
              class="col-9"
              placeholder="Search"
            > 
            </input>      
            <button 
              style={goButtonStyle} 
              class="col-2"
            >Go!
            </button> 
            </div>
        </div>
       
        <button 
          style={newButtonStyle} 
          class="col-2"
        >New
        </button>   
      </header>
    );
  }
  
  export default Header;