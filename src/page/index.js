import React from 'react';
import ReactDOM from 'react-dom';
import Left from "./left";
import Right from "./right";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

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