import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { Spin } from 'antd' 
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


import './index.less'

import {
    updatePageLoading,
} from "./store";

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators({
        updatePageLoading,
    },dispatch)
})

class Loading extends Component {
    componentDidMount(){
        if(!this.props.pageLoading){
            this.props.actions.updatePageLoading(true)
        }
    }
    componentDidUpdate(){
        if(!this.props.pageLoading){
            //this.props.actions.updatePageLoading(true)
        }
    }
    render() {
        return (
            // <Spin tip='LOADING' wrapperClassName='Loading_wrap' spinning={this.props.Store.loading}>
            <div className="rightMainContainer">
                {this.props.children}
                {this.props.pageLoading ? (<div className="pageLoadingMask">loading...</div>) : null}
            </div>
            // </Spin>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Loading);