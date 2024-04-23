import React from 'react'
import VideoCard from './VideoCard'
import data from '../data/videos'

const VideoGrid = () => {
    const video = data.videos;
    return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-[80%] ml-72 mt-20 mb-2 min-w-[720px]'>
                {
                    video.map((item, idx) => (
                        <VideoCard key={idx}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            channel={item.channel}
                            views={item.views}
                            time_uploaded={item.time_uploaded}
                            channel_icon={item.channel_icon}
                        />
                    ))
                }
            </div>
    )
}

export default VideoGrid