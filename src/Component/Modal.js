import React from 'react';

const Modal = (props) => {
    return (
        <div>
            <div className='modal' style={{backgroundColor : props.color}}>
                <h4>{props.name[props.title]}</h4>
                <p>알찬 하루다</p>
                <p>{props.date}</p>
            </div>
        </div>
    );
};

export default Modal;