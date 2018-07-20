import React,{Component} from "react";
import AuthChecker from "../components/authChecker";
import {connect} from "react-redux";

import { login } from "@/action"

class AuthorizedLayout extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <AuthChecker>
                <div className="authorizedLayoutContainer">
                    {this.props.children}
                </div>
            </AuthChecker>
        )
    }
}

export default connect((state)=>{
    return state
})(AuthorizedLayout);