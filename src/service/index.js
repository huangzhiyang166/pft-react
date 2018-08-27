import axios from "@/util/axios";
import md5 from "js-md5";

export function Login({account,pwd}){
    return axios.post("/dlogin.php",{passport:account,password:md5(pwd),yzm:"FY9L"})
}

export function GetMemberInfo(){
    return axios.post("/r/Home_HomeMember/getMemberInfo/")
}