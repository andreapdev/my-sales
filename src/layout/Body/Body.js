import React from 'react';

//components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//style
import StyledBody from './style';

const Body = ({children}) => {
    return(
        <StyledBody>
            <Header/>
            <div className="d-flex justify-content-center">{children}</div>
            <Footer/>
        </StyledBody>
    );
}

export default Body;