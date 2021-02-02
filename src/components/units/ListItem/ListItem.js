import React from 'react';

  
const ListItem = ({number, invoiceInfo}) => {

    const LoopItemData = (dataText) => {
        const itemLoop=[];
        for (let i=0; i<dataText.length; i++){
            itemLoop.push(<p class="col">{dataText[i]}</p>);
        }
        return itemLoop;
    }

    //HERE we read the prop: itemData will change every time!
    const itemData=invoiceInfo[number];
    const itemInfoLoop=LoopItemData(Object.values(itemData));
    const itemStyle = {
        borderBottom: " 1px solid",
        borderColor: "#ffffff"
    }

    return (
        <a href="/">
        <li style={itemStyle} class="row listItem text-center">
            {itemInfoLoop}
        </li>
        </a>
    );
}

  export default ListItem;