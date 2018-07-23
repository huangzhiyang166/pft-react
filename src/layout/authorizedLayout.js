import React,{Component} from "react";
import {connect} from "react-redux";

class AuthorizedLayout extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="authorizedLayoutContainer">
                {this.props.children}
            </div>
        )
    }
}

export default connect()(AuthorizedLayout);