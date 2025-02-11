
'use client'

import { IoIosHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
const products = [
  {
    id: 1,
    brand: "Anine Bing",
    name: "Vintage Bing Sweatshirt",
    price: "169",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738860917/saolor54_pccx6c.jpg",
  },
  {
    id: 2,
    brand: "Saint Laurent",
    name: "Saint Laurent Logo Hoodie",
    price: "850",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738861028/saolor32_akaxkw.jpg",
  },
  {
    id: 3,
    brand: "ba&sh",
    name: "Quest Jacket",
    price: "395",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738861028/saolor36_mrj92y.jpg",
  },
  {
    id: 4,
    brand: "Zadig & Voltaire",
    name: "Bella T-Shirt",
    price: "98",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738860374/saolor12_ym39sg.jpg",
  },
  {
    id: 5,
    brand: "Vince",
    name: "Half-Zip Windbreaker",
    price: "395",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738861027/saolor33_aqqypn.jpg",
  },
  {
    id: 6,
    brand: "Anine Bing",
    name: "Gwyneth Silk Camisole",
    price: "149",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738860372/saolor14_jiyblv.jpg",
  },
  {
    id: 7,
    brand: "Zadig & Voltaire",
    name: "Bella T-Shirt",
    price: "98",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738860374/saolor12_ym39sg.jpg",
  },
  {
    id: 8,
    brand: "Zadig & Voltaire",
    name: "Bella L-Shirt",
    price: "98",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738861028/saolor36_mrj92y.jpg",
  },
  {
    id: 9,
    brand: " Voltaire",
    name: "Bella L-Shirt",
    price: "98",
    image: "https://res.cloudinary.com/disl2qbtm/image/upload/v1738861027/saolor33_aqqypn.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="p-6 bg-gray-100 ">
    <div className="text-center mb-8 lg:mb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-serif">
         New product
      </h1>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Explore our most popular categories
      </p>
    </div>

    {/* Swiper Carousel */}
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
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
          1280: { slidesPerView: 5 },
        }}
        className="!pb-12"
      >

      {products.map((product) => (
        <SwiperSlide key={product.id} className="w-auto">
          <div className="bg-white p-4 rounded-sm shadow-sm hover:shadow-lg transition-transform duration-300">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full contrast-125 h-72 object-fill rounded-md transition-transform duration-300 hover:scale-105"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer">
                <IoIosHeartEmpty size={18} className="text-gray-500 hover:text-red-500" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-500">{product.brand}</h3>
              <p className="text-gray-700 font-semibold">{product.name}</p>
              <p className="text-gray-900 font-bold mt-1">৳ {product.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}
