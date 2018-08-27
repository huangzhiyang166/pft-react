import React,{Component} from "react";

class LoginLayout extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        const isLogin = this.checkLogin();
        if(!isLogin){
            this.props.history.push("/login");
        }
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


export default LoginLayout


