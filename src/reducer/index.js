import {combineReducers} from "redux";
import app from "@/action/app";
import login from "@/action/login";



export default combineReducers({
    app,
    login
})
