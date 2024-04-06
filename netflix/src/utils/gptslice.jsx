import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name:'gpt',
    
    initialState:{
         gptmoive:null,
        showgpt:false,

    },
    
    reducers:{
        tooglegpt:(state,action)=>{
              state.showgpt = !state.showgpt
        },
        addgptmovie:(state,action)=>{
            state.gptmoive = action.payload
        }
    }
})
export const {tooglegpt,addgptmovie} = gptslice.actions
export default gptslice.reducer