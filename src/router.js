import React,{Component} from "react";
import history from "@/history";
import { HashRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import BasicLayout from "@/layout/basicLayout";
import LoginLayout from "@/layout/loginLayout";
import AuthLayout from "@/layout/authLayout";
import {authRoute} from "./routes";

const omitRouteRenderProperties = (obj) => {
    const OMIT_ROUTE_RENDER_PROPERTIES = ['render', 'component'];
    const result = {};
    for(let i in obj){
        if(!OMIT_ROUTE_RENDER_PROPERTIES.includes(i)){
            result[i] = obj[i];
        }
    } 
    return result;
}


class AppRouter extends Component{
    renderAuthRoute(route){
        const {
            path,
            redirect,
            component : RouteComponent
        } = route;
        const routeConfig = omitRouteRenderProperties(route);
        if(redirect){
            return(
                <Route
                    key={path}
                    {...routeConfig}
                    render={(props)=> <Redirect to={route.redirect}/>}
                />
            )
        }
        return(
            <Route
                key={path}
                {...routeConfig}
                render={(props) => {
                    const _props = {...props,...routeConfig};
                    return (
                        <LoginLayout {..._props}>
                            <AuthLayout {..._props}>
                                <RouteComponent {..._props}/>
                            </AuthLayout>
                        </LoginLayout>
                    )
                }}                                                
            />
        )
    }
    render(){
        return(
            <ConnectedRouter history={history}>
                <BasicLayout>
                    <Router>
                        <Switch>
                            {authRoute.map((route) => (this.renderAuthRoute(route)))}
                        </Switch>
                    </Router>
                </BasicLayout>
            </ConnectedRouter>
        )
    }
}


export default AppRouter;