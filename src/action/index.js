/*
 * @Author: huangzhiyang 
 * @Date: 2018-07-20 16:08:43 
 * @Last Modified by: huangzhiyang
 * @Last Modified time: 2018-08-27 15:36:36
 * 
 * 全局action
 * 
 */

import Cookie from 'js-cookie';
import {
    LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL,
} from "./types";

import {
    Login, GetMemberInfo
} from "@/service";



export const login = ({account,pwd}) => (dispatch,getState) => {
    dispatch({type:LOGIN_LOADING});
    return Login({account,pwd}).then((res)=>{
        if(res.code==200){
            dispatch({type:LOGIN_SUCCESS,payload:res});
            const cok = Cookie.get("PHPSESSID");
            console.log(cok);
        }else{
            dispatch({type:LOGIN_FAIL,payload:res});
        }
        return res;
    }).catch((e)=>{
        const error = {
            code : -500,
            msg : e.toString()
        }
        dispatch({type:LOGIN_FAIL,payload:error});
        return error;
    })
}


export const getMemberInfo = () => (dispatch,getState) => {
    return GetMemberInfo();
}