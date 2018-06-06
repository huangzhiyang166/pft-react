import {Login,GetMemberInfo} from "@/service";

const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
};

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_SUCCESS";



export const login = ({account,pwd}) => (dispatch,getState) => {
    dispatch({type:LOGIN_LOADING});
    return Login({account,pwd}).then((res)=>{
        console.log(res);
    }).catch((e)=>{
        dispatch({type:LOGIN_FAIL});
    })
}

export const getMemberInfo = () => (dispatch,getState) => {
    GetMemberInfo().then((res)=>{
        console.log(res);
    }).catch((e)=>{

    })
}




export default (state=initialState,{type,payload}) => {
    return {

    }[type] || initialState;
}