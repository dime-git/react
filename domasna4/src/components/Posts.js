import React from 'react';

export class Posts extends React.Component{

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(resp=>resp.json())
        .then(resp=>console.log(resp))
    }

    render(){
        return <h2>Posts</h2>
    }
}