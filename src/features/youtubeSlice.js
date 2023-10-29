import { createSlice } from "@reduxjs/toolkit";
import { GetHomePageVideos } from "../store/reducers/GetHomePageVideos";


const initialState = {
    videos:[],
    currentPlaying:null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recomendedVideo:[]

};
const youtubeSlice = createSlice({
  name:"youtubeApp",
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{  
    builder.addCase(GetHomePageVideos.fulfilled,(state,action)=>{

    })
  }
})

export default youtubeSlice.reducer;