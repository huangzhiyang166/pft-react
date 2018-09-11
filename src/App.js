import React from 'react';
import store from "./store";
import {Provider} from "react-redux";
import Router from "./router";
import A from "@/util/aaaa";
export default class App extends React.Component{
    render(){
		return(
			<Provider store={store}>
				<Router/>
			</Provider>
		)
	}
}

