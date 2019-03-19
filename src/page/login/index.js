import React from "react";
import {connect} from "react-redux";
import {useState} from "react";
import {login} from "@/action/app";

function Main({history,dispatch,location,app}){

    const [isLoading,setIsLoading] = useState(false);

    function onLoginBtnClick(e){
        if(isLoading) return false;
        setIsLoading(true);
        dispatch(login({username:"123624",pwd:"mmcs123",code:""})).then((res) => {
            setIsLoading(false);
            history.replace("/");
        }).catch((e) => {
            console.error(e);
            setIsLoading(false);
        })
    }


    return(
        <div className="loginPage">
            <button onClick={onLoginBtnClick}>{isLoading ? '正在登录' : '点击登录'}</button>
        </div>
    )
}

export default connect((state => state))(Main);