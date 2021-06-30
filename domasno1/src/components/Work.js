import React from 'react';

export function Work(props){

    console.log(props)
    return(
        <div id='work'>
            {props.userAoverwork$===true && 
            <div>
                <h2>Work</h2><h4>userA</h4>
                <p>Work: {props.userA.rabota}</p>
                <p>Name: {props.userA.ime}</p>
                <p>Address: {props.userA.adresa}</p>
            </div>}
            {props.userBoverwork$===true &&
            <div>
            <h2>Work</h2><h4>userB</h4>
            <p>Work: {props.userB.rabota}</p>
            <p>Name: {props.userB.ime}</p>
            <p>Address: {props.userB.adresa}</p>
            </div>}    
        </div>
            
    )
}