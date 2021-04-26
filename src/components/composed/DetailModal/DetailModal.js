import React from 'react';
import StyledDetailModal from './style';

const DetailModal = ({isVisible}) =>{

    const handleClick = (e) => {
        e.preventDefault();
        isVisible=false;
    }

    return (
        <>
        {isVisible ?
            <StyledDetailModal>
                Hello I'm a modal
                <button onClick={e=>handleClick(e)}>X</button>
            </StyledDetailModal>
        :
            null
        }
        </>
    );
}

export default DetailModal;