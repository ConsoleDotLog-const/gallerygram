import React from 'react'

const Modal = ({selectedImg}) => {
    
    return(
        <div className="backdrop">
            <img src={selectedImg} alt="modal">

            </img>

        </div>
    )

}

export default Modal