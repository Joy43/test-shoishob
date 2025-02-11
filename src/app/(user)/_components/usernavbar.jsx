"use client";

import React, { useState } from 'react';
import { FaHome, FaStopwatch, FaTimes, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 
import { IoBagCheckOutline } from "react-icons/io5";
import { useAuth } from '@/app/hooks/useAuth';

const usermenuList = [
  { id: 1, name: 'Profile', icon: FaUser, path: 'profile' },
  { id: 2, name: 'Cart', icon: IoBagCheckOutline , path: 'cart' },
  { id: 3, name: 'wishlist', icon: IoBagCheckOutline , path: 'wishlist' },
  { id: 4, name: 'Home', icon: FaHome, path: '/' },
];

export default function UserSidebarNav() {
  const [activeIndex, setActiveIndex] = useState();
  const router = useRouter(); 
  const {user}=useAuth()

  const handleNavigation = (path, index) => {
    setActiveIndex(index);
    router.push(path.startsWith('/') ? path : `/${path}`);
  };
  // -----date format--------
  const formatDate=(dateString)=>{
    if(!dateString) return "N/A";
    const date=new Date(dateString);
    return date.toLocaleDateString("en-US",{
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  };

  return (
    <div className="h-screen bg-[#FFFFFF] rounded-xl flex flex-col p-2 overflow-auto shadow-xl">

{/* --------user short info-------- */}
<div className="text-center my-4">
                    <img className="h-32 w-32 rounded-full border-4 border-orange-300  mx-auto my-4"
                        src={
                          user?.image
                            ? `https://fastdeals.ecommatrix.xyz/storage/app/public/profile/${user?.image}`
                            : "https://randomuser.me/api/portraits/women/21.jpg" 
                        }alt="user profile"/>
                    <div className="">
                        <h3 className="font-semibold text-xl text-gray-800  mb-1">{user?.f_name}</h3>
                        <div className="inline-flex gap-1 text-gray-700  items-center">
                           <span>joined</span>
                          { formatDate(user?.created_at)}
                        </div>
                    </div>
                </div>
             {/* -----Dashboad infomation ---------- */}

      <div>
     
                </div>
      {/*-----------------  Menu ----------------------*/}
      <div className="flex flex-col gap-4 mt-4 text-gray-800">
        {usermenuList.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 text-lg rounded-lg p-4 cursor-pointer transition-transform transform ${
              activeIndex === index
                ? 'bg-gradient-to-r from-[#674188] to-[#9D3B81] text-gray-900 scale-105 shadow-xl'
                : 'text-zinc-800 hover:bg-[#1A3A5D] hover:text-white hover:scale-105'
            }`}
            onClick={() => handleNavigation(item.path, index)}
          >
            <item.icon className="text-2xl" />
            <h2 className="font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}