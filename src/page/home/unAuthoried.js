import React from 'react';
import {connect} from "react-redux";
import {
    login as Login,
} from "@/action";


const mapStateToProps = (state) => {
    return state
};



class UnAuthoried extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        
        console.log("UnAuthoried componentDidMount..")
        // this.props.dispatch(Login({account:"123624",pwd:"mmcs123",yzm:"SSZ6"})).then((res)=>{
            
        // })
        
    }
    render(){
        return(
            <div>
                UnAuthoried
            </div>
        )
    }
}





export default connect(mapStateToProps)(UnAuthoried);
