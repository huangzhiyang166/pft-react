import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import home from "../page/home/store";


export default combineReducers({
    routing : routerReducer,
    home
})