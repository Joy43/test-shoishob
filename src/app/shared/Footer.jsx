import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { FaInstagram, FaPhone, FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import bikas from "../../../public/images/paylogo/bikas.png";
import rocket from "../../../public/images/paylogo/rocket.png";
import nagad from "../../../public/images/paylogo/Nagad.png";
import visacard from "../../../public/images/paylogo/visacard.png";
import douchbangla from "../../../public/images/paylogo/dutchbangla.png";
import martercard from "../../../public/images/paylogo/mastercard.png";

export default function Footer() {
  return (
    <div className="bg-gray-50 mt-8 px-4">
      {/*---------- Payment Info ---------------*/}
 {/* Hours Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h1 className="text-black font-bold text-lg">Hours:</h1>
          <p className="text-gray-700 text-sm md:ml-2">9.00 am ~ 7.30 pm Saturday to Thursday</p>
        </div>

{/* Payment Logos */}
    
       
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 place-items-center">
          {[bikas, nagad, visacard, douchbangla,rocket, martercard].map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-2 bg-gray-100 rounded-sm shadow-sm w-16 h-14">
              <Image src={logo} width={40} height={40} alt={`Payment logo ${index}`} className="object-contain" />
            </div>
          ))}
        </div>
     

      {/*------------ Contact Info -------------*/}
      <hr className="my-6" />
      <div className="flex flex-wrap justify-between gap-6 p-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <FaPhone className="text-[#F55F1E] w-8 h-8" />
          <p className="text-gray-700 text-sm">Do You Need Help</p>
          <a href="tel:+88 01701677162" className="text-blue-600 text-sm">+88 01701677162</a>
        </div>

        <div className="flex justify-center">
          <Image className="contrast-125" src={logo} width={150} height={150} alt="Shoishob Logo" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-black font-bold text-lg">Connect on Social</p>
          <ul className="flex gap-4">
            {[FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp].map((Icon, index) => (
              <li key={index}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon className="h-6 w-6 text-[#F55F1E] hover:text-indigo-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 p-6 border-t-2">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Our Company</h2>
            <p className="mt-4 text-sm text-gray-700">Shoishob is a leading kids fashion brand in Bangladesh...</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Customer Services</h2>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              {["Contact Us", "Fabric Care", "Store Locator", "Terms & Conditions"].map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Our Categories</h2>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              {["Baby Collection", "Girls Collection", "Boys Collection"].map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Contact Us</h2>
            <div className="flex gap-4 mt-2">
            <a href="#">
              <Image
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                className="h-10"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
              <Image
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                className="h-10"
                width={40}
                height={40}
              />
            </a>
          </div>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">Email: <a href="mailto:info@shoishobbd.com" className="text-blue-600">info@shoishobbd.com</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+8802 55058350" className="text-blue-600">+8802 55058350</a></p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-5 mt-5 text-sm text-gray-600">
          <p>Copyright 2025 © Shoishob Fashion Ltd. All rights reserved.</p>
          <p>Made by NI Brizz soft</p>
        </div>
      </footer>
    </div>
  );
}
