import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import history from "@/history";
import {getAccountInfo} from "@/service";
import store from "@/store";
import {actionType} from "@/action/app"; 

const bootstrap = () => ReactDOM.render(<App/>, document.getElementById('root'));

if(history.location.pathname==="/login"){
    bootstrap();
}else{
    getAccountInfo().then((res) => {
        if(res.code!=200){
            history.replace("/login");
        }else{
            store.dispatch({
                type : actionType.updateUserInfo,
                payload : res.data
            });
        }
        bootstrap();
    }).catch((e) => {
        console.log(e);
        alert("请确保www仓库切到hotfix/dlogin-spa分支");
    })
}

