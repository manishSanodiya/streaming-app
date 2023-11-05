import { createSlice } from "@reduxjs/toolkit";
import { GetHomePageVideos } from "../store/reducers/GetHomePageVideos";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideo";
import { getVideoDetails } from "../store/reducers/getVideoDetails";

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
    clearVideos: (state)=>{
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm:(state,action)=>{
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state)=>{
      state.searchTerm = ""
    }

  },
  extraReducers:(builder)=>{  
    builder.addCase(GetHomePageVideos.fulfilled,(state,action)=>{
      if(action.payload && action.payload.parsedData){
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }

    })
    builder.addCase(getSearchPageVideos.fulfilled,(state,action)=>{
      if(action.payload && action.payload.parsedData){
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }

    })
    builder.addCase(getRecommendedVideos.fulfilled,(state,action)=>{
      if(action.payload && action.payload.parsedData){
      
        state.recomendedVideo = action.payload.parsedData;
      }

    })
    builder.addCase(getVideoDetails.fulfilled,(state,action)=>{

        state.currentPlaying = action.payload

    })
  }
})


export const {clearVideos,changeSearchTerm,clearSearchTerm} = youtubeSlice.actions;
export default youtubeSlice.reducer;