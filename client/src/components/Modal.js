import styled from "styled-components";
import React from "react";

const ModalWrapper = styled.div`
    width: 500px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    position: fixed;
    display: block; 
    overflow: auto; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); 
    z-index: 999; 
    cursor: pointer;
`

const ModalContent = styled.div`
    margin: 15% auto;
    background-color: white;
    border-radius: 0.25rem;
    width: 50vw;
    padding: 32px;
    position: relative;
`

const Button = styled.button`
    background: ${props => props.primary ? "#43D48F" : "#FF6984"};
    border: none;
    border-radius: 5px;
    margin-right: 32px;
    height: 30px;
    width: 90px;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
`

class Modal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <ModalWrapper>
                <ModalContent>
                    {this.props.children}
                </ModalContent>
            </ModalWrapper>
        );
    }
}

export default Modal;