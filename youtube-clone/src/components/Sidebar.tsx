"use client";
import React, { useState } from 'react';

const Sidebar = () => {
    const [selectedTab, setSelectedTab] = useState('Home');
    const tabs = ['Home', 'Shorts', 'Watch Later', 'Liked Videos', 'Settings'];

    const handleTabClick = (tabName: any) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="bg-black text-white h-screen w-64 flex flex-col fixed mt-20 px-2">
            <ul className="flex-1">
                {tabs.map((tabName, index) => (
                    <li key={index} className={`p-4 ${selectedTab === tabName ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded-xl`} onClick={() => handleTabClick(tabName)}>
                        {tabName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
