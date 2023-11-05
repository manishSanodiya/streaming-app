import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import Navbar from '../components/Navbar';
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideo';
import { getVideoDetails } from '../store/reducers/getVideoDetails';

const Watch = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const currentPlaying = useAppSelector((state)=> state.youtubeApp.recomendedVideo);
   
    //cureredjflksdj
    console.log(currentPlaying)
    const getRecommendedVideo = useAppSelector((state)=> state.youtubeApp.recomendedVideo)

    useEffect(()=>{
        if(id){
            dispatch(getVideoDetails(id));
        }else{
            navigate('/')
        }
    },[id,navigate,dispatch])

    useEffect(()=>{
        if(currentPlaying && id) dispatch(getRecommendedVideos(id));

    },[currentPlaying,dispatch,id]);



  return (
    <div>
      {currentPlaying && currentPlaying.videoId===id && (
      <div className="max-h-screen overflow-auto">
      <div style={{height:"7.5vh"}}>
      <Navbar />
      </div>
            <div>
                <div>
                    <div>
                        <div>
                            <iframe src='https://www.youtube.com/embed/${id}?autoplay-1' frameBorder={0} width={800} height={503} allowFullScreen title='youtube player'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
    </div>
  )
}

export default Watch
