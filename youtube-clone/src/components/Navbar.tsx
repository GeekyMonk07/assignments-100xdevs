import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black py-2 px-4 flex justify-between items-center fixed w-full z-10'>
            <div className='flex items-center gap-2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="youtube" className='w-12' />
                <h1 className='font-bold text-lg'>Youtube</h1>
            </div>
            <div className='flex'>
                <input type="text" placeholder='Search' className="bg-black text-white w-96 rounded-l-full px-4 py-2 outline-none border border-gray-700 focus:ring focus:ring-blue-400" />
                <button className="rounded-r-full bg-gray-800 px-4">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                    >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                    </svg>
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={20}
                        d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
                    />
                </svg>
                <img src="https://www.pngitem.com/pimgs/m/645-6452863_profile-image-memoji-brown-hair-man-with-glasses.png" alt="profile" className='w-9 h-9 rounded-full object-contain bg-white' />
            </div>
        </nav>
    )
}

export default Navbar