import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GetHomePageVideos } from "../store/reducers/GetHomePageVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(GetHomePageVideos(false));

  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-auto">
      <div style={{height:"7.5vh"}}>
      <Navbar />
      </div>
      <div className="flex" style={{height:"92.5vh"}}>
      <Sidebar />
      {
        videos.length ? (
          <InfiniteScroll 
          dataLength={videos.length}
          next={()=>dispatch(GetHomePageVideos(true))}
          hasMore={videos.length<500}
          loader={<Spinner/>}
          height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item)=>{
                return <Card data={item} key={item.videoId}/>
              })}
            </div>

          </InfiniteScroll>
        ):(
          <Spinner/>
        )
      }
   
      </div>
    </div>
  );
};

export default Home;
