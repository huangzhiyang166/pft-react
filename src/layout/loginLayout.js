import React,{Component} from "react";
import {connect} from "react-redux";
import {pageLoading} from "@/action/app";

class LoginLayout extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        const isLogin = this.checkLogin();
        if(!isLogin){
            this.props.history.push("/login");
        }
        this.props.dispatch(pageLoading(true));
    }
    checkLogin(){
        return true
    }
    render(){
        return (
            <div className="loginLayout">
                {this.props.children}
            </div>
        )
    }
}


export default connect()(LoginLayout)


