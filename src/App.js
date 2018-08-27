import React from 'react';
import store from "./store";
import {Provider} from "react-redux";
import Router from "./router";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { ConnectedRouter } from 'react-router-redux'
// import {authorizedRoutes} from "./routes";
// import UnFound from "./layout/404";
// import AuthRoute from "@/hoc/authRoute";
export default class App extends React.Component{
    render(){
		return(
			<Provider store={store}>
				<Router/>
			</Provider>
		)
	}
}

