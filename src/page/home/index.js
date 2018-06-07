import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import axios from "@/util/axios";
import {
    login,
    getMemberInfo,
} from "./store";

import{ updatePageLoading} from "../page-loading/store";

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators({
        login,
        getMemberInfo,
        updatePageLoading
    },dispatch)
})


class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        
        const {actions} = this.props;
        setTimeout(()=>{
            console.log("home componentDidMount..")
            actions.updatePageLoading(false)
            actions.login({account:"123624",pwd:"mmcs123"}).then(()=>{
                setTimeout(()=>{
                    actions.getMemberInfo();
                },1000)
            })
        },3000)
        
    }
    render(){
        return(
            <div>
                home
            </div>
        )
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Home);
