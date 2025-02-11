"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Button from "@/app/components/Button";

export const sliderData = [
  {
    id: 1,
    title: "Modern Architecture",
    subtitle: "01 / collection",
    description:
      "Exploring the intersection of form and function in contemporary design.",
    imgSrc: "https://i.postimg.cc/02V4pMtr/1.jpg",
    gradient: "from-[#2A3D66]/70 to-[#2A3D66]/50",
  },
  {
    id: 2,
    title: "Urban Spaces",
    subtitle: "02 / collection",
    description: "Shoishob girl collection new",
    imgSrc: "https://i.postimg.cc/VsBpkHnq/2.jpg",
    gradient: "from-[#4F7B92]/70 to-[#4F7B92]/50",
  },
  {
    id: 3,
    title: "Interior Flow",
    subtitle: "03 / Band collection",
    description: "Shoishob winter collection",
    imgSrc: "https://i.postimg.cc/vHYjgLtp/3.jpg",
    gradient: "from-[#5C6B73]/70 to-[#5C6B73]/50",
  },
  {
    id: 4,
    title: "Interior Flow",
    subtitle: "03 / Band collection",
    description: "Shoishob winter collection",
    imgSrc: "https://i.postimg.cc/vHYjgLtp/3.jpg",
    gradient: "from-[#5C6B73]/70 to-[#5C6B73]/50",
  },
];

const Slider = () => {
  return (
    <div className="relative p-4 w-full h-screen min-h-[500px] bg-gray-200 text-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }} 
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="relative h-full flex flex-col md:flex-row">
              {/*-------- Image Section ------------*/}
              <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-[80vh] relative overflow-hidden group">
                <Image
                  src={slide.imgSrc}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-opacity duration-500 group-hover:opacity-0`}
                ></div>
              </div>

              {/* --------------  Content Section  ----------------------*/}
              <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 bg-white/80 md:bg-[#e9e9e9]">
                <div className="max-w-lg text-black">
                  <span className="font-serif tracking-wider text-sm">
                    {slide.subtitle}
                  </span>
                  <h2 className="mt-4 font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-black to-neutral-400 bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                  {/* <button className="mt-6 px-6 py-3 text-white bg-[#2B2D42] hover:bg-[#D94E1B] rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                    Buy Now →
                  </button> */}
                  <Button text="Buy Now →" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
