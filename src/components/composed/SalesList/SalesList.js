import React from 'react';
import invoiceInfo from '../../../data/data';
import ListItem from '../../../components/units/ListItem/ListItem';


import StyledMain from './style';

const SalesList = () => {

  const LoopItemList=()=>{
      const itemLoop=[];
      for(let i=0; i<invoiceInfo.length; i++){
        itemLoop.push(<ListItem key={i} number={i} invoiceInfo={invoiceInfo} />)
      } 
      return itemLoop;  
    }

    
  //PROPS in this return: every item is one ticket
  return(
    <StyledMain className="row mt-4">
      <ul className="col">
        {LoopItemList()}
      </ul>
    </StyledMain>
  );
}

  export default SalesList;