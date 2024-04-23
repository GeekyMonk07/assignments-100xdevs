import { data } from 'autoprefixer'
import React from 'react'

const Assignment1 = () => {

    const data = [
        {
            id: 1,
            count: '80K',
            category: 'Followers',
        },
        {
            id: 2,
            count: '803K',
            category: 'Likes',
        },
        {
            id: 3,
            count: '1.4K',
            category: 'Photos',
        },
    ]
    return (
        <div class="flex justify-center items-center h-screen">
            <div class="h-[550px] w-[600px] bg-gray-200 rounded-lg shadow-lg flex flex-col">
                <div className='bg-blue-500 w-[600px]'>
                    <img src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="placeholder"
                        className="relative rounded-full h-[200px] w-[200px] top-[100px] left-[200px] object-cover" />
                </div>
                <div className='w-[600px] mt-[110px]'>
                    <h1 className="text-2xl text-black font-bold text-center">Rita Correia<span className='text-gray-500 font-serif'> 32</span></h1>
                    <h1 className="text-2xl text-gray-500 font-bold text-center font-serif">London</h1>
                </div>
                <div className='h-1 w-[600px] bg-gray-400 mt-[50px]'></div>
                <div className='grid grid-cols-3 py-2'>
                    {
                        data.map((item) => (
                            <div key={item.id} className='flex flex-col justify-between items-center p-4'>
                                <h1 className='text-2xl font-bold text-black'>{item.count}</h1>
                                <h1 className='text-lg text-gray-500 font-serif'>{item.category}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Assignment1