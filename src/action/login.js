export const REQUEST_LOGIN_START = "REQUEST_LOGIN_START";
export const REQUEST_LOGIN_SUCCESS = "REQUEST_LOGIN_SUCCESS";
export const REQUEST_LOGIN_FAIL = "REQUEST_LOGIN_FAIL";

export const login = ({account,pwd,vcode}) => ({dispatch,getState}) => {

}
export const loginStart = () => {type : REQUEST_LOGIN_START}

export const loginFail = (errorMsg,vcode=false) => ({
    type : REQUEST_LOGIN_FAIL,
    payload : {
        errorMsg,vcode
    }
})


const initState = {
    loading : false,
    errorMsg : "",
    vcode : "",
    account : "",
    pwd : ""
};

const reducer = {
    [REQUEST_LOGIN_START](state,payload){
        return {
            ...state,
            login : {
                loading : true
            }
        };
    },
    [REQUEST_LOGIN_FAIL](state,{errorMsg,vcode}){
        return {
            ...state,
            login : {
                loading : false,
                errorMsg,
                vcode
            }
        };
    }
}

export default function(state=initState,action){
    const {type,payload} = action;
    return (typeof reducer[type]==="function") ? reducer[type](state,payload) : state;
}