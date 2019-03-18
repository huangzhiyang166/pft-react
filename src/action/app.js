
// import "nprogress/nprogress.css";
// import NProgress from "nprogress";
// NProgress.configure({ showSpinner: false });

import {login as Login,getAccountInfo} from "@/service";

export const actionType = {
    updateUserInfo : "updateUserInfo"
};

export const login = ({username,pwd,code}) => {
    return ({dispatch,getState}) => {
        return new Promise((resolve,reject) => {
            Login(username,pwd,code).then((res) => {
                if(res.code==200){
                    return getAccountInfo().then((res) => {
                        if(res.code==200){
                            dispatch(actionType.updateUserInfo,res.data);
                            return resolve(res);
                        }else{
                            return reject(new Error(res.msg));
                        }
                    }).catch((e) => {
                        return reject(e)
                    })
                }else{
                    return reject(new Error(res.msg));
                }
            }).catch((e) => {
                return reject(e)
            })
        })
    }
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