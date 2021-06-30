import React from 'react';

export function User (props){

    console.log(props)
    return(
        <div id='user'>
            <h2>User 1</h2>
            <p>Name: {props.userA.ime}</p>
            <p>Last name: {props.userA.prezime}</p>
            <p>Work: {props.userA.rabota}</p>
            <p>Address: {props.userA.adresa}</p>
            <h2>User 2</h2>
            <p>Name: {props.userB.ime}</p>
            <p>Last name: {props.userB.prezime}</p>
            <p>Work: {props.userB.rabota}</p>
            <p>Address: {props.userB.adresa}</p>
        </div>
    )
}