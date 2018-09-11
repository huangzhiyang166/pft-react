
import "nprogress/nprogress.css";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });


export const SWITCH_PAGE_LOADING = "SWITCH_PAGE_LOADING";

/**
 * 全局切换页面loading状态
 * @param {Boolean} status  true==正在加载  false==结束加载
 */
export const pageLoading = (status) => {
    if(status){
        NProgress.start();
    }else{
        NProgress.done();
    }
    return{
        type : SWITCH_PAGE_LOADING,
        payload : status
    }
}

const initState = {
    accountInfo : {},
    pageLoading : false
}


const reducer = {
    [SWITCH_PAGE_LOADING](state,payload){
        return {
            ...state,
            pageLoading : payload
        };
    }
}

export default function(state=initState,action){
    const {type,payload} = action;
    return (typeof reducer[type]==="function") ? reducer[type](state,payload) : state;
}