import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as AppActions from "@/action/app";

const mapStateToProps = (state) => {
    return state
};
const mapDispatchToProps = (dispatch) => {
    const actions = {
        ...AppActions
    }
    return{
        actions : bindActionCreators(actions,dispatch)
    }
}


class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.actions.pageLoading(false)
        },3000)
    }
    jump(e){
        this.props.history.push("self_apply_prodlist")
    }

    render(){
        if(this.props.app.pageLoading) return <div>加载中...</div>
        return(
            <div>
                home!!!!!2222222222222
                <div>
                    <a onClick={(e) => this.jump(e)}>跳转s</a>
                </div>
            </div>
        )
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Home);
