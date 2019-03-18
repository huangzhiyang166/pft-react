import React,{Component} from "react";
import history from "@/history";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
// import { AnimatedSwitch } from 'react-router-transition';
// import BasicLayout from "@/layout/basicLayout";
// import LoginLayout from "@/layout/loginLayout";
// import NotFound from "@/layout/notFound";
// import AuthLayout from "@/layout/authLayout";
// import {authRoute} from "./routes";

import loading from "@/component/delay-loading";
const delay = 3000;

const Layout = Loadable({loader: () => import(/* webpackChunkName:'Layout' */"@/layout"),loading,delay});
const Login = Loadable({loader: () => import(/* webpackChunkName:'Login' */"@/page/login"),loading,delay});


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
    // renderAuthRoute(route){
    //     const {
    //         path,
    //         redirect,
    //         component : RouteComponent
    //     } = route;
    //     const routeConfig = omitRouteRenderProperties(route);
    //     if(redirect){
    //         return(
    //             <Route
    //                 key={path}
    //                 {...routeConfig}
    //                 render={(props)=> <Redirect to={route.redirect}/>}
    //             />
    //         )
    //     }
    //     return(
    //         <Route
    //             key={path}
    //             {...routeConfig}
    //             render={(props) => {
    //                 const _props = {...props,...routeConfig};
    //                 return (
    //                     <LoginLayout {..._props}>
    //                         <AuthLayout {..._props}>
    //                             <RouteComponent {..._props}/>
    //                         </AuthLayout>
    //                     </LoginLayout>
    //                 )
    //             }}                                                
    //         />
    //     )
    // }
    render(){
        return(
            // <ConnectedRouter history={history}>
            //     <BasicLayout>
            //         <Router>
            //             <AnimatedSwitch
            //                 atEnter={{ opacity: 0 }}
            //                 atLeave={{ opacity: 0 }}
            //                 atActive={{ opacity: 1}}
            //                 className="switch-wrapper">
            //                     {authRoute.map((route) => (this.renderAuthRoute(route)))}
            //                     <Route component={NotFound}/>
            //             </AnimatedSwitch>
            //         </Router>
            //     </BasicLayout>
            // </ConnectedRouter>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route path="/" component={Layout}></Route>
                </Switch>
            </Router>
        )
    }
}


export default AppRouter;