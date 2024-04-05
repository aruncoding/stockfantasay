import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "./slices/loginSlice";
import { registerReducer } from "./slices/registrationSlice";
import {thunk} from "redux-thunk";

const middleware = [thunk];

const store = configureStore({
    reducer:{
       login:loginReducer,
       register: registerReducer
    }
})
export default store