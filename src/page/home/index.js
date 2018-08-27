import React from 'react';
import {connect} from "react-redux";
import {
    login as Login,
    getMemberInfo as GetMemberInfo
} from "@/action";


const mapStateToProps = (state) => {
    return state
};



class Home extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        const dispatch = this.props.dispatch;
        dispatch(Login({account:"123624",pwd:"mmcs123"})).then((res)=>{
            dispatch(GetMemberInfo()).then((res) => {
                console.log("GetMemberInfo",res);
            })
        })
        
    }
    render(){
        return(
            <div>
                home
            </div>
        )
    }
}





export default connect(mapStateToProps)(Home);
