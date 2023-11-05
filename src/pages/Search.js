import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GetHomePageVideos } from "../store/reducers/GetHomePageVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../features/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import SearchCard from "../components/SearchCard";

const Search = () => {
    const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)

  useEffect(() => {
    dispatch(clearVideos());
    if(searchTerm==="") navigate("/");
    else{
    dispatch(getSearchPageVideos(false));
    }


  }, [dispatch,navigate,searchTerm]);

  return (
    <div className="max-h-screen overflow-auto">
      <div style={{height:"7.5vh"}}>
      <Navbar />
      </div>
      <div className="flex" style={{height:"92.5vh"}}>
      <Sidebar />
      {
        videos.length ? (
            <div className="py-8 pl-8 flex flex-col w-full gap-5">
          <InfiniteScroll 
          dataLength={videos.length}
          next={()=>dispatch(getSearchPageVideos(true))}
          hasMore={videos.length<500}
          loader={<Spinner/>}
          height={650}
          >
            
              {videos.map((item)=>{
                return (<div className="my-5" key={item.videoId}>
                <SearchCard data={item} />
                </div>
                )
              })}
            

          </InfiniteScroll>
          </div>
        ):(
          <Spinner/>
        )
      }
   
      </div>
    </div>
  );
};

export default Search;
