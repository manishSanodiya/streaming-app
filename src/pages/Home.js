import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GetHomePageVideos } from "../store/reducers/GetHomePageVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(GetHomePageVideos(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
