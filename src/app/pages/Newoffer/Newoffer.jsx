"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const offers = [
  {
    id: 1,
    discount: "25% OFF",
    title: "SUMMER DEALS",
    description:
      "Don't miss out on some very special items at extraordinary sale prices. For a limited time",
    imageUrl: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738744619/offer_now_vgj4iu.png",
    altText: "Summer sale offer on Shoishob products",
  },
  {
    id: 2,
    discount: "10% OFF",
    title: "WINTER DEALS",
    description:
      "Don't miss out on some very special items at extraordinary sale prices. For a limited time",
    imageUrl: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738744807/big_sale_oowpt4.png",
    altText: "Winter season special offers",
  },
];

export default function Newoffer() {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentOffer = offers[currentOfferIndex];

  return (
    <section className="flex items-center justify-center px-4 xs:px-6 sm:px-8 lg:px-10 py-8 md:py-12 w-full overflow-hidden bg-gray-50 min-h-[450px]">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-6 lg:gap-12 h-full">
        {/*------------ Left Content ------------------*/}
        <div className="w-full md:w-1/2 text-center md:text-left h-full flex flex-col justify-center space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-[#DB5A5F] animate-fade-in-up">
              {currentOffer?.discount}
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {currentOffer?.title}
            </h2>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-[600px] mx-auto md:mx-0">
            {currentOffer?.description}
          </p>

          {/*---------- Buttons ---------------*/}
          <div className="mt-2 sm:mt-4 flex justify-center md:justify-start">
          <Link 
                      href="/cart"
                      className="inline-flex items-center justify-center w-fit gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm rounded-lg transition-all duration-300"
                    >
                      View Details
                      <FaChevronRight className="w-4 h-4" />
                    </Link>
          </div>
        </div>

        {/*----------- Right Image -----------------*/}
        <div className="w-full md:w-1/2 flex justify-center items-center h-full">
          <div className="relative w-full h-[450px] max-w-[450px] transform transition-all duration-500 hover:scale-105">
            {offers.map((offer, index) => (
              <Image
                key={offer.id}
                src={offer.imageUrl}
                alt={offer.altText}
                fill
                priority
                className={`rounded-xl shadow-2xl object-cover object-center absolute transition-opacity duration-700 ease-in-out ${
                  index === currentOfferIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}