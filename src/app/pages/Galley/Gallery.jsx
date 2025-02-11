"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const Gallery = () => {
  const cards = [
    {
      image: "https://i.postimg.cc/VsBpkHnq/2.jpg",
      title: "Girl Collection",
    },
    {
      image: "https://d1190btxnvweoc.cloudfront.net/uploads/all/7wRPrIJ7mbNLvXg0FXYQ0D4U1MmxacytZN1CzDa6.jpg",
      title: "Boys Collection",
    },
    {
      image: "https://i.postimg.cc/02V4pMtr/1.jpg",
      title: "Winter Collection",
    },
    {
      image:
        "https://res.cloudinary.com/disl2qbtm/image/upload/v1738753305/vecteezy_fashion-model-kids_26911393-scaled_qgpy7c.jpg",
      title: "Summer Collection",
    },
  ];

  return (
    <section className="bg-slate-100 p-4 flex flex-col items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="w-full "
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-sm shadow-sm overflow-hidden group">
              <div className="w-full h-[600px] relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
             
                  className="transition-transform object-fill contrast-125 duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              {/*------------- Overlay Text ----------*/}
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-black/30 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold">{card.title}</p>
                <Link
                  className="bg-white text-gray-800 px-4 py-2 rounded-md mt-2 hover:bg-gray-200"
                  href="/"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
