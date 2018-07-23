import React,{Component} from "react";
import PropTypes from "prop-types";
import {
    Route,
} from 'react-router-dom'
import AuthorizedLayout from "@/layout/authorizedLayout";

const propTypes = {
    component : PropTypes.func.isRequired
};

const isAuth = true;

class AuthRoute extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {
            component : Component,
            unAuthoried : UnAuthoried,
            ...rest
        } = this.props;

        console.log(rest)

        return(
            <Route {...rest} render={(props) => {
                console.log(props)
                return(
                    <AuthorizedLayout {...props}>
                        {isAuth ? <Component {...props}/> : <UnAuthoried {...props}/>}
                    </AuthorizedLayout>
                )
            }}/>
        )


    }
}

// AuthRoute.propTypes = propTypes;

export default AuthRoute
