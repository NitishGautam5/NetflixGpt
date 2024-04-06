import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieslice"
import userReducer from "./userslice"
import gptReducer from "./gptslice"
const appstore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
        }
    }
) 
export default appstore