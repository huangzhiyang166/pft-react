import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import home from "../page/home/store";
import pageLoading from "../components/page-loading/store";


export default combineReducers({
    routing : routerReducer,
    home,
    pageLoading
})