import {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

const propTypes = {
    isLogin : PropTypes.bool.isRequired,
    account : PropTypes.string.isRequired, //登录者的帐号
    roles : PropTypes.array.isRequired,    //帐号所属的角色 
    history : PropTypes.object.isRequired
}


class AuthChecker extends Component{
    componentDidMount(){
        const {
            isLogin,
            account,
            roles,
            history
        } = this.props;

        //if(!isLogin || !account || !roles || roles.length==0) return history.push("/login");



        
    }
    componentDidUpdate(){
        const {
            isLogin,
            account,
            roles,
            history
        } = this.props;

        //if(!isLogin || !account || !roles || roles.length==0) return history.push("/login");
    }
    render(){
        return this.props.children;
        if(this.props.isLogin) return this.props.children;
        return null
    }
}

AuthChecker.propTypes = propTypes;

export default withRouter(AuthChecker);
