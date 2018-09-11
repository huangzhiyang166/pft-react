import React from 'react';
import {connect} from "react-redux";
import {
    login as Login,
    getMemberInfo as GetMemberInfo
} from "@/action";
import history from "@/history";


const mapStateToProps = (state) => {
    return state
};


class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        
    }
    jump(e){
        console.log(this.props);
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





export default connect(mapStateToProps)(Home);
