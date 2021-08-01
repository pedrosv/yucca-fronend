import React from 'react';
import { useHistory } from 'react-router';

function NavigateButton(props) {
    
    const path = props.path
    const text = props.children
    const isDisabled = (path === "")

    const history = useHistory();

    function navigateTo(){
        history.push(path);
        console.log("clicado");
    }

    return (
        <button onClick={navigateTo} style={{visibility: isDisabled ? 'hidden' : 'visible' }} >{text}</button>
    );
}

export default NavigateButton;