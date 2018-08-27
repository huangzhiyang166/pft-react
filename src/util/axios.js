import Axios from "axios";
import qs from "qs";
const axios = Axios.create({
    timeout : 10 * 1000,
    withCredentials : true
})
const httpRequestError = (status,statusText) => {
    console.error(`请求出错 status: ${status} statusText: ${statusText}`);
}

//添加request拦截器
axios.interceptors.request.use((config)=>{
    let params = config.data || {};
    config.data = qs.stringify(params);
    return config;
})
//添加response拦截器
axios.interceptors.response.use((response)=>{
    if(response.status==200){
        return response.data;
    }else{
        httpRequestError(response.status,response.statusText);
        return null;
    }
},(error)=>{
    console.log(error);
})


export default axios;