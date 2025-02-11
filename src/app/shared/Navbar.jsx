"use client";

import { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FiUser, FiLogOut } from "react-icons/fi";
import { MdWifiCalling1 } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import logo from "../../../public/shoihob.svg";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fastdeals.ecommatrix.xyz/api/v1/categories"
        );
        setCategories(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-sm fixed top-0 z-50 w-full  ">
      {/*-------------- Topbar ----------*/}
      <div className="bg-[#362b42] text-white text-xs md:text-sm
       lg:text-sm text-center p-1">
        <span>40+ outlets around the country and we do international Deliveries</span>
      </div>
      {/* -----------middle bar--------- */}
 {/* Middle Bar - Hidden on mobile */}
 <div className="hidden md:flex justify-between py-2 px-2 md:px-6 bg-gray-50 w-full">
        <p className="text-sm">Salling Life</p>
        <ul className="flex gap-4 text-sm">
          <li className="hover:text-red-400">
            <Link href="/contact">About us</Link>
          </li>
          <li className="hover:text-red-600">
            <Link href="/wishlist">My Wishlist</Link>
          </li>
          <li className="hover:text-red-600">
            <Link href="/cart">Cart</Link>
          </li>
          <li className="hover:text-purple-600">
            <Link href="/compare">Compare(0)</Link>
          </li>
        </ul>
      </div>
    <hr  className="boder border-x-2 "/>
      {/*----------- Navbar ---------------*/}
      <div className="py-1 px-1 md:px-6 bg-gray-50 w-full">
        <div className="flex flex-col md:flex-row
        justify-around items-center gap-2 md:gap-0">
          {/* ----------Left Section: Logo & Search---------- */}
          <div className="flex items-center gap-3 w-full md:w-auto" ref={dropdownRef}>
          

            {/*------------ Logo ------------*/}
            <Link href="/" className="flex-shrink-0">
              <Image src={logo} width={120} height={130} loading="lazy" alt="Shoishob Logo" 
              className="contrast-125 h-16 w-full md:h-16 md:w-36" />
            </Link>

            {/*-------------- Search Bar ------------------*/}
            <div className="relative w-full max-w-xl">
              <div className="flex items-center border rounded-full bg-white">
                <AiOutlineSearch className="ml-3 text-3xl text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 rounded-full focus:outline-none"
                />
                <button
                  className="hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-r-full hover:bg-gray-100 transition"
                  onClick={() => setShowCategories(!showCategories)}
                  onMouseEnter={() => setShowCategories(true)}
                >
                  Categories
                  <IoIosArrowDropdownCircle className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/*----------- Right Section: Call, User, Cart -------------*/}
          <div className="flex items-center gap-4 w-full md:w-auto ">
              {/*---------- Mobile Menu Button ------------*/}
              <button className="lg:hidden text-2xl text-black hover:text-purple-900" onClick={() => setShowMobileMenu(true)}>
              <AiOutlineMenu />
            </button>
           
            
            {/* ------------- Call Now -----------------*/}
            <div className="  md:flex items-center gap-2">
              <MdWifiCalling1 className="text-2xl" />
              <div>
                <h1 className="text-sm text-gray-500">Call Us Now</h1>
                <p className="text-md font-semibold text-gray-900">01701677162</p>
              </div>
            </div>

            {/*-------------- User Profile ------------------- */}
            {user ? (
              <div className="relative">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
                  <Image width={500} height={500} className="size-10 rounded-full bg-slate-500 object-cover" src={`https://fastdeals.ecommatrix.xyz/storage/app/public/profile/${user?.image}`} alt="shoishob userProfile" />
                  <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <FiUser /> Profile
                    </Link>
                    <button onClick={logout} className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/signin" className="flex items-center gap-2" onClick={() => setShowMobileMenu(false)}>
              <div className=" md:flex items-center gap-2">
           <FaUser className="text-2xl" />
           <div>
             <h1 className="text-sm text-gray-500">Account</h1>
             <p className="text-md font-semibold text-gray-900">Login or Signup</p>
           </div>
         </div>
           </Link>
            )}
          </div>
        </div>

        {/* Categories Dropdown */}
        {showCategories && (
          <div className="absolute left-0 right-0 mx-4 sm:mx-6 md:left-auto md:right-auto md:mx-0 mt-4 bg-white p-2 rounded-sm shadow-lg border z-10"
          onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setTimeout(() => setShowCategories(false), 300)}
          >
            {loading ? (
              <p className="text-gray-500">Loading categories...</p>
            ) : error ? (
              <p className="text-red-500">Failed to load categories</p>
            ) : (
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                {categories?.map((category) => (
                  <Link
                    href={`/categories/${category?.id}`}
                    key={category?.id}
                    className="flex items-center gap-2 px-2 py-2 hover:bg-blue-700 rounded-md transition hover:text-white ">
                    <Image className="w-8 h-8 object-cover rounded-lg" src={`https://fastdeals.ecommatrix.xyz/storage/app/public/category/${category?.icon}`} alt={category?.name} width={32} height={32} />
                    <span className="font-medium">{category?.name}</span>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        )}

        {/*-------------- Mobile Menu -------------------*/}
        {showMobileMenu && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileMenu(false)} />
            <div className="relative bg-white w-3/4 h-full p-4">
              <button className="absolute top-4 right-4 text-2xl" onClick={() => setShowMobileMenu(false)}>
                <AiOutlineClose />
              </button>
              <ul className="mt-8 space-y-4">
                <li className="hover:text-purple-600">
                  <Link href="/" onClick={() => setShowMobileMenu(false)}>Home</Link>
                </li>
                <li className="hover:text-purple-600">
                
                </li>
                <li className="hover:text-red-400">
                  <Link href="/contact" onClick={() => setShowMobileMenu(false)}>
                 WINTER/25</Link>
                </li>
                <li className="hover:text-red-400">
                  <Link href="/hotproduct" onClick={() => setShowMobileMenu(false)}>
                SALE</Link>
                </li>
                <li className="hover:text-red-400">
                  <Link href="/hotproduct" onClick={() => setShowMobileMenu(false)}>
                Men</Link>
                </li>
              </ul>
              <div className="mt-8 border-t pt-4">
                {user ? (
                  <div className="space-y-2">
                    <Link href="/profile" className="flex items-center gap-2" onClick={() => setShowMobileMenu(false)}>
                      <FiUser /> Profile
                    </Link>
                    <button onClick={logout} className="flex items-center gap-2 w-full text-left">
                      <FiLogOut />
                      Logout
                    </button>
                  </div>
                ) : (
              //  ---------mobile--------
                  <Link href="/signin" className="flex items-center gap-2" onClick={() => setShowMobileMenu(false)}>
                 <div className="hidden md:flex items-center gap-2">
              <FaUser className="text-2xl" />
              <div>
                <h1 className="text-sm text-gray-500">Account</h1>
                <p className="text-md font-semibold text-gray-900">Login or Signup</p>
              </div>
            </div>
              </Link>
           
  
                )}
              </div>
            </div>
          </div>
        )}
 <hr className="m-1 bg-[#F2F2F2]"/>
        {/*--------- Desktop Bottom Navigation -----------*/}
        <ul className="hidden lg:flex justify-center space-x-6 text-gray-700 text-sm font-medium mt-1 ">
          <li className="hover:text-purple-600"><Link href="/">Home</Link></li>
        
      <li className="hover:text-red-400">
                  <Link href="/contact">
                 WINTER/25</Link>
                </li>
                <li className="hover:text-red-400">
                  <Link href="/hotproduct" >
                SALE</Link>
                </li>
                <li className="hover:text-red-400">
                  <Link href="/hotproduct" >
                Men</Link>
                </li>
          <li className="hover:text-red-600"><Link href="/hotproduct">Top-Rated </Link></li>
               
        </ul>
      </div>
    </div>
  );
}

export default Navbar;