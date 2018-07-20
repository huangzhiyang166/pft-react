export default function makeActionCreator(type,...argNames){
    return function(...args){
        let action = {
            type : type,
            payload : {}
        };
        argNames.forEach((arg,index) => {
            if(typeof args[index]!=="undefined"){
                action.payload[argNames[index]] = args[index];
            }
        })
        return action;
    }
}