import React from 'react';
import invoiceInfo from '../../../data/data';
import ListItem from '../../../components/units/ListItem/ListItem';

const SalesList = () => {
  const LoopItemList=()=>{
      const itemLoop=[];
      for(let i=0; i<invoiceInfo.length; i++){
        itemLoop.push(<ListItem number={i} invoiceInfo={invoiceInfo}/>)
      } 
      return itemLoop;  
    }
  
  const mainStyle={
      backgroundColor: "#91d4e3",
    };
    
  //PROPS in this return: every item is one ticket
  return(
    <main class="row mt-4" style={mainStyle}>
      <ul class="col">
        {LoopItemList()}
      </ul>
    </main>
  );
}

  export default SalesList;