import {
    LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL
} from "@/action/types"

const appInitializeState = {
    isLogin : false,
    userInfo : null,
    loginFail : null
};

const appReducer = {
    [LOGIN_FAIL](state,payload){
        return {
            ...state,
            userInfo : null,
            loginFail : payload
        };
    },
    [LOGIN_SUCCESS](state,payload){
        console.log(state);
        console.log(payload);
        return state;
    }
}

export default function(state=appInitializeState,action){
    const {type,payload} = action;
    return (typeof appReducer[type]==="function") ? appReducer[type](state,payload) : state;
}