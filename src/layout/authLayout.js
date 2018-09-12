import React,{Component} from "react";
import {connect} from "react-redux";

class AuthLayout extends Component{
    constructor(props){
        super(props)
    }
    checkAuth(){
        return true
    }
    renderUnAuth(){
        return <div className="unAuthLayout">没有权限访问此路由</div>
    }
    render(){
        const isAuth = this.checkAuth();
        if(!isAuth) return this.renderUnAuth();
        return(
            <div className="authLayout">
                {this.props.children}
            </div>
        )
    }
}

export default connect()(AuthLayout);