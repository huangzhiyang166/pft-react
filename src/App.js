import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import store,{history} from "./store";
import {authorizedRoutes} from "./routes";
import AuthorizedLayout from "./layout/authorizedLayout";
export default class App extends React.Component{
    render(){
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router>
						<Switch>
							{authorizedRoutes.map((route) => {
								const {path,component : RouteComponent} = route;
								const routeConfig = {}
								Object.keys(route).forEach((key) => {
									if(key!="component") routeConfig[key] = route[key];
								})
								return(
									<Route 
										key={path}
										{...routeConfig}
										render = {(props) => {
											const config = {...routeConfig,...props}
											return (
												<AuthorizedLayout {...config}>
													<RouteComponent {...config}/>
												</AuthorizedLayout>
											)
										}}
									/>
								)
							})}
						</Switch>
					</Router>
				</ConnectedRouter>
			</Provider>
		)
	}
}

