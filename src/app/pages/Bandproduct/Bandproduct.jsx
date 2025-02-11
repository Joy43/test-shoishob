'use client'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import Link from "next/link";

const Bandproduct = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchBrands = async () => {
      try {
        const response = await axios.get("https://fastdeals.ecommatrix.xyz/api/v1/brands",{cache:"no-store"} );
        setBrands(Array.isArray(response.data) ? response.data : response.data.products || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Data fetch error", error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
    return () => controller.abort();
  }, []);

  if (loading) return <div className="text-center text-gray-500 text-lg mt-10">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 text-lg mt-10">Error: {error.message}</div>;

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8  mx-auto">
      <h1 className="text-4xl font-bold text-[#2B2D42] mb-16 text-center font-montserrat">
        Shoishob Brand Products
        <div className="mt-2 h-1 w-24 bg-[#2B2D42] mx-auto rounded-full" />
      </h1>

      <div className="relative">
      <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={15}
            slidesPerView="auto"
            freeMode={{ enabled: true, sticky: true }}
            grabCursor
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={800}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 1.8 },
              640: { slidesPerView: 2.5 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1280: { slidesPerView: 5 }
            }}
            className="!pb-12"
          >
          {brands.map((brand) => {
            const progress = brand.completion_percentage || 60;
            const circumference = 2 * Math.PI * 45; 
            const strokeDasharray = `${(progress * circumference) / 100},${circumference}`;

            return (
              <SwiperSlide key={brand.id} className="py-4">
                <Link href={`/brands/${brand.id}`} className="block h-full  ">
                  <div className="flex flex-col items-center bg-[#f4f4f7] transition-all hover:shadow-xl hover:-translate-y-3 cursor-pointer rounded-sm shadow-sm shadow-purple-900/20 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative p-4 w-72 h-72 mb-6">
                      <div className="absolute inset-0 animate-rotate-slow">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <defs>
                            <clipPath id={`circleView-${brand.id}`}>
                              <circle cx="50" cy="50" r="45" />
                            </clipPath>
                            <linearGradient id={`gradient-${brand.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>

                          <circle cx="50" cy="50" r="47" fill="url(#gradient-${brand.id})" />
                          <path fill="none" className="stroke-white/20" strokeWidth="4" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80" />
                          <path 
                            fill="none" 
                            className="stroke-white"
                            strokeLinecap="round"
                            strokeWidth="4" 
                            strokeDasharray={strokeDasharray}
                            d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                          >
                            <animate 
                              attributeName="stroke-dasharray" 
                              from="0,282.743" 
                              to={strokeDasharray}
                              dur="1.5s"
                              fill="freeze"
                            />
                          </path>

                          <image 
                            width={100}
                            height={100}
                            href={brand?.image 
                              ? `https://fastdeals.ecommatrix.xyz/storage/app/public/brand/${brand?.image}`
                              : "/images/default-placeholder.png"}
                            clipPath={`url(#circleView-${brand?.id})`}
                            preserveAspectRatio="xMidYMid slice"
                            className="transition-transform object-fill duration-500 group-hover:scale-110"
                          />
                        </svg>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-black tracking-wide truncate max-w-full px-4 text-center mb-2">
                      {brand?.name}
                    </h4>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Bandproduct;
