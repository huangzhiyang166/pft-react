import React,{Component} from "react";
class BasicLayout extends Component{
    render(){
        return(
            <div className="basicLayout">
                {this.props.children}
            </div>
        )
    }
}


export default BasicLayout;