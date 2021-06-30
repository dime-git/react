import React,{useEffect,useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Posts} from './Posts';
import {Albums} from './Albums';
import {Link} from 'react-router-dom';


export function App(){
  
  const [albumsList, setAlbumsList] = useState([]);

  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/albums')
      .then(result=> (result.json()))
      .then(json=> console.log(json))
      .catch(err=>alert(err))
  },[]) //


  return(
    <div id='app'>
      <h2>App</h2>
      <ul>
        <li><Link to='/'>Back to App</Link></li>
        <li><Link to='/albums'>Albums</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
      <Switch>
        <Route path='/posts' component={Posts}/>
        <Route path='/albums' component={Albums}/>
      </Switch>
    </div>
  )
}