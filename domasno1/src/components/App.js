import React from 'react'; 
import {User} from './User';
import {Work} from './Work';

let userA = {
  ime: 'Atanas',
  prezime: 'Nikolovski',
  rabota: 'Asseco',
  adresa: 'Skopje'
}

let userB = {
  ime: 'Vasil',
  prezime: 'Karakulev',
  rabota: 'Seavus',
  adresa: 'Skopje',
  
}

export function App(){
  
  return(
    <div id='app'>
      <h2>Homework</h2>
      <User userA={userA} userB={userB}/>
      <Work userAoverwork$={false} userBoverwork$={true} userA={userA} userB={userB}/>
    </div>
  )
}
