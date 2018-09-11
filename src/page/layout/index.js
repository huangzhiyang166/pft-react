import React from 'react';
import ReactDOM from 'react-dom';
import Left from "./left";
import Right from "./right";


export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Left/>
                <Right/>
            </div>   
        ) 
    }
}