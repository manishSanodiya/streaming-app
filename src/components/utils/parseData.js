import React from 'react'
import axios from  "axios"
import { parseVideoDuration } from './parseVideoDuration';

const API_KEY = process.env.REACT_APP_STREAMING_APP_API;

export const parseData = async(items) => {
    console.log(items)
try{
    const videoIds = [];
    const channelIds = [];
    items.forEach(item => {
      channelIds.push(item.snippet.chennelId);
      videoIds.push(item.id.videoIds);
    });

    const {
        data: {item: channelsData},
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`)

    const parsedChannelsData = [];
    channelsData.forEach((channel)=>{
        parsedChannelsData.push({
            id: channel.id,
            image:channel.snippet.thumbnails.default.url
        })
    })

    const {
        data: {items: videosData},
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`)


    const parseData = [];

    items.forEach((item,index)=>{
        const {image: channelImage
        } = parsedChannelsData.find((data)=> data.id===item.snippet.channelId);
        if(channelImage){
            parseData.push({
                videoId: item.id.videoData,
                videoTitle: item.snippet.title,
                videoDescription: item.snippet.description,
                videoThumbnail: item.snippet.thumbnails.medium.url,
                videoLink: `https://wwww.youtube.com/watch?v=${item.id.videoId}`,
                videoDuration: parseVideoDuration(
                    videosData[index].contentDetails.duration
                ),
                videoViews: convertRawToString(
                    videosData[index].statistics.viewCount
                ),
                videoAge: timeSince(new Date(item.snippet.publishedAt)
                ),
                channelInfo: {
                    id: item.snippet.channelId,
                    image: channelImage,
                    name: item.snippet.channelTitle,
                }
            })
        }
        
       
    })
    return parseData;

}catch(err){
    console.log(err);
}

}

