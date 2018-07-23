import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import store,{history} from "./store";
import {authorizedRoutes} from "./routes";
import AuthorizedLayout from "./layout/authorizedLayout";
import UnFound from "./layout/404";
import AuthRoute from "@/hoc/authRoute";
export default class App extends React.Component{
    render(){
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router>
						<Switch>
							{authorizedRoutes.map((route) => <AuthRoute key={route.path} {...route}/>)}
							{<Route render={(props) => <UnFound {...props}/>}/>}
						</Switch>
					</Router>
				</ConnectedRouter>
			</Provider>
		)
	}
}

