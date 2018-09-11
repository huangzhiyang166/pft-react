import React,{Component} from "react";
import {connect} from "react-redux";


class UnFound extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="UnFoundContainer">
                404 not found!
            </div>
        )
    }
}

export default connect()(UnFound);