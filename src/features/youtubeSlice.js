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
      if(action.payload && action.payload.parsedData){
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }

    })
  }
})

export default youtubeSlice.reducer;