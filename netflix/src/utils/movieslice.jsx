import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
name:"movies",
initialState:{},
Nowplayingmovies:null,
Trailer_video:null,
TrendingMovie:null,
UpcomingMovie:null,
PopularMovie:null,

reducers: {
    addnowplaying:(state,action) =>{
     state.Nowplayingmovies = action.payload
    },
    addTrailer:(state,action) =>{
        state.Trailer_video = action.payload
    },
    addtrending:(state,action) =>{
        state.TrendingMovie = action.payload
       },
       addupcoming:(state,action) =>{
        state.UpcomingMovie = action.payload
       },
       addpopular:(state,action) =>{
        state.PopularMovie = action.payload
       },
}

}
)
export const {addnowplaying,addTrailer,addtrending,addupcoming,addpopular} = movieslice.actions
export default movieslice.reducer