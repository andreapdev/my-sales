import React, {useState, setState} from 'react';
import DetailModal from '../../composed/DetailModal/DetailModal';

import StyledItem from './style';
  
const ListItem = ({number, invoiceInfo}) => {

    const [isDetailModalVisible, setIsDetailModalVisible]=useState(false);

    const handleClick = (e) =>{
        console.log('clicked!!!!!')
        e.preventDefault();
        setIsDetailModalVisible(true);
    }

    const LoopItemData = (dataText) => {
        const itemLoop=[];
        for (let i=0; i<dataText.length; i++){
            itemLoop.push(<p key={i} className="col">{dataText[i]}</p>);
        }
        return itemLoop;
    }

    //HERE we read the prop: itemData will change every time!
    const itemData=invoiceInfo[number];
    const itemInfoLoop=LoopItemData(Object.values(itemData));

    return (
        <>
            <StyledItem href="/">
            <li className="row listItem text-center" onClick={(e)=>handleClick(e)}>
                {itemInfoLoop}
            </li>
            </StyledItem>
            <DetailModal isVisible={isDetailModalVisible} />
        </>
    );
}

  export default ListItem;