import React from 'react'

const VideoCard = (props: any) => {
    return (
        <div className='flex flex-col mb-2'>
            <img src={props.thumbnail} alt="thumbnail" loading='lazy' className='rounded-xl' />
            <div className='flex gap-2 mt-2'>
                <img className='object-cover w-12 h-12 rounded-full' src={props.channel_icon} alt="avatar" loading='lazy' />
                <div>
                    <h4 className='text-white font-bold'>{props.title}</h4>
                    <p className='text-gray-500 text-sm'>{props.channel}</p>
                    <p className='text-gray-500 text-sm'>{props.views} • {props.time_uploaded} ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard