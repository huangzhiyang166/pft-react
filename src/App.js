import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from "./page";
import Login from "./page/login";
import {Provider} from "react-redux";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import store,{history} from "./store";
export default class App extends React.Component{
    render(){
		return(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router>
						<Switch>
							<Route path="/login" component={Login}/>
							<Route path="/" component={Pages}/>
						</Switch>
					</Router>
				</ConnectedRouter>
			</Provider>
		)
	}
}

