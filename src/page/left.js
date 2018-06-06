import React from 'react';
import {Route,Link} from "react-router-dom";
export default class Left extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div><Link to="/login">login</Link></div>
                <div><Link to="/home">home</Link></div>
            </div>
        )
    }
}
