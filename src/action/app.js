
// import "nprogress/nprogress.css";
// import NProgress from "nprogress";
// NProgress.configure({ showSpinner: false });

import {login as Login,getAccountInfo} from "@/service";

export const actionType = {
    updateUserInfo : "updateUserInfo"
};

export const login = ({username,pwd,code}) => (dispatch,getState) => {
    return new Promise((resolve,reject) => {
        Login(username,pwd,code).then((res) => {
            if(res.code==200){
                getAccountInfo().then((res) => {
                    if(res.code==200){
                        dispatch({
                            type : actionType.updateUserInfo,
                            payload : res.data
                        });
                        resolve(res);
                    }else{
                        reject(new Error(res.msg));
                    }
                }).catch((e) => {
                    reject(e)
                })
            }else{
                reject(new Error(res.msg));
            }
        }).catch((e) => {
            reject(e)
        })
    })
}


const initState = {
    userInfo : null
}


const reducer = {
    [actionType.updateUserInfo](state,userInfo){
        return{
            ...state,
            userInfo
        }
    }
}

export default function(state=initState,action){
    const {type,payload} = action;
    return (typeof reducer[type]==="function") ? reducer[type](state,payload) : state;
}