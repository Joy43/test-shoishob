"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";

const Latestproducts = [
  {
    imgSrc:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1738922111/BC05CHQ044_eoisuc.jpg",
    productName: "Product Name 1",
    price: 149,
    originalPrice: 199,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1738922109/BC05CHS222_zulz50.jpg",
    productName: "Product Name 2",
    price: 149,
    originalPrice: 199,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1738922084/BC05CES114_zmbad9.jpg",
    productName: "Product Name 3",
    price: 149,
    originalPrice: 199,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1738922084/BC05AES190_u0rmxf.jpg",
    productName: "Product Name 4",
    price: 149,
    originalPrice: 199,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1738922083/BC05BHS031-317x462_tcujrv.jpg",
    productName: "Product Name 5",
    price: 149,
    originalPrice: 199,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dluuillmt/image/upload/v1738922111/BC05AHS136_xbknzd.jpg",
    productName: "Product Name 6",
    price: 149,
    originalPrice: 199,
  },
];

export const Latesttest = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif tracking-tight">
          Latest Exclusive Discounts
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our specially curated limited-time offers
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20} 
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          480: { slidesPerView: 1.5, spaceBetween: 15 },
          640: { slidesPerView: 2.2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 25 },
        }}
        className="!pb-12"
      >
        {Latestproducts.map((latestproduct, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-64 transform overflow-hidden rounded-md bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                className="w-full h-72 object-fill"
                src={latestproduct.imgSrc}
                alt={latestproduct.productName}
                width={300}
                height={400}
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">
                  {latestproduct.productName}
                </h2>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900">
                    ৳ {latestproduct.price}
                  </p>
                  <p className="text-base font-medium text-gray-500 line-through">
                    ৳{latestproduct.originalPrice}
                  </p>
                  <p className="ml-auto text-base font-medium text-red-500">
                    {Math.round(
                      ((latestproduct.originalPrice - latestproduct.price) /
                        latestproduct.originalPrice) *
                        100
                    )}
                    % off
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
