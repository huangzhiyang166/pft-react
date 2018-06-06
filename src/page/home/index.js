import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import axios from "@/util/axios";
import {
    login,
    getMemberInfo,
} from "./store";

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login,
    getMemberInfo,
},dispatch)


class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.login({account:"123624",pwd:"mmcs123"}).then(()=>{
            setTimeout(()=>{
                this.props.getMemberInfo();
            },1000)
        })
    }
    render(){
        console.log(this.props);
        return(
            <div>
                home
            </div>
        )
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Home);
