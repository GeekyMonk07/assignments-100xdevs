import React from 'react'
import Sidebar from './Sidebar'
import VideoGrid from './VideoGrid'

const Homepage = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <VideoGrid />
            </div>
        </div>
    )
}

export default Homepage