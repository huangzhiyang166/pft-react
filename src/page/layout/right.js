import React from 'react';
import {Route} from "react-router-dom";
import routeConfig from "../route";
import PageLoading from "../page-loading";

export default class Right extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="rightWrap">
                <PageLoading>
                    {routeConfig.map((item,i) => 
                        <Route key={i} path={item.path} component={item.component} exact/>
                    )}
                </PageLoading>
                
            </div>
        )
    }
}
