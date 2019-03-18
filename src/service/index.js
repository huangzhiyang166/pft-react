import axios from "@/util/axios";
import md5 from "js-md5";
const delay = (time=1000, data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(Object.prototype.toString.call(data)!=="[object Error]"){
				resolve(data);
			}else{
				reject(data)
			}
		}, time);
	});
};


export function login(account,pwd,code=""){
	return axios.post("/dlogin.php",{
		passport : account,
		password : md5(pwd),
		yzm : code
	})
}

// export function Login({account,pwd}){
//     return axios.post("/dlogin.php",{passport:account,password:md5(pwd),yzm:""})
// }

export function GetMemberInfo(){
    return axios.post("/r/Home_HomeMember/getMemberInfo/")
}


export function getAccountInfo(){
	return new Promise((resolve,reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET","/dlogin_info.php");
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					let json = null;
					const responseText = xhr.responseText;
					try{
						json = JSON.parse(responseText);
						resolve(json);
					}catch(e){
						reject("返回的数据格式错误");
					}
				}else{
					reject(xhr.statusText)
				}
			}
		}
		xhr.send();
	})
}