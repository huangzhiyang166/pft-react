import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Loadable from "react-loadable";
import loading from "@/component/delay-loading";
const delay = 3000;
const NotFound = Loadable({loader: () => import(/* webpackChunkName:'NotFound' */"@/page/404"),loading,delay});
const Home = Loadable({loader: () => import(/* webpackChunkName:'Home' */"@/page/home"),loading,delay});
const ProdList = Loadable({loader: () => import(/* webpackChunkName:'ProdList' */"@/page/prod-list"),loading,delay});


export default function(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/prodlist" component={ProdList}></Route>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
            <div className="layout">layout</div>
        </div>
    )
}