import React from 'react';
import {StyledHeader, StyledBtn, StyledSearchBar, StyledSearchParent} from './style';

const Header=()=>{
   
    return (
      <StyledHeader>
        <StyledBtn
          className="logo"
          href="/"
          >MySales!
        </StyledBtn> 

        <StyledSearchParent>
          <StyledSearchBar 
            className="search-bar"
            placeholder="Search"
          > 
          </StyledSearchBar>      
          <StyledBtn
            href='/'
            className="search-btn"
          >Go!
          </StyledBtn> 
        </StyledSearchParent>
       
        <StyledBtn
          href='/'
          className="new-btn"
        >New
        </StyledBtn>   
      </StyledHeader>
    );
  }
  
  export default Header;