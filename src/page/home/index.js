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
        console.log(this.props.actions)
        this.props.actions.pageLoading(true);
    }
    jump(e){
        this.props.history.push("self_apply_prodlist")
    }

    render(){
        return(
            <div>
                home!!!!!2222222222222
                <div>
                    <a onClick={(e) => this.jump(e)}>跳转</a>
                </div>
            </div>
        )
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Home);
