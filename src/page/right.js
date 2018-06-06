import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from "react-router-dom";
import Login from "./login";
import Home from "./home";
export default class Right extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
            </div>
        )
    }
}
