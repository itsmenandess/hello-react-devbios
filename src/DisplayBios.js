import React from 'react';
import DeveloperBios from './DeveloperBios';

function DisplayBios(props){

    return props.developers.map(dev=><DeveloperBios key={dev.id} developer={dev}/>);
    
}

export default DisplayBios;
