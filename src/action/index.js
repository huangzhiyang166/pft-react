/*
 * @Author: huangzhiyang 
 * @Date: 2018-07-20 16:08:43 
 * @Last Modified by: huangzhiyang
 * @Last Modified time: 2018-07-20 17:15:14
 * 
 * 全局action
 * 
 */

import {
    LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL,
} from "./types";

import {
    Login, GetMemberInfo
} from "@/service";



export const login = ({username,pwd}) => (dispatch,state) => {
    dispatch({type:LOGIN_LOADING});
    return Login({account:username,pwd}).then((res)=>{
        if(res.code==200){
            dispatch({type:LOGIN_SUCCESS,payload:res});
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
