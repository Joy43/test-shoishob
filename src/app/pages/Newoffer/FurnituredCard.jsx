// components/FurnitureCard.jsx
"use client";

const FurnitureCard = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-yellow-500 clip-diagonal"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12">
        {/* Left Section */}
        <div className="text-center bg-white md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">
            Modern <span className="text-yellow-500">Furniture</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Amat sed tristique justo justo. Vitae mauris pretium non sed aliquam
            sem semper suspendisse.
          </p>
          <button className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-yellow-600 transition-all">
            Order Now
          </button>
          <p className="mt-6 text-gray-500">www.modernfurniture.com</p>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 mt-8 md:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/disl2qbtm/image/upload/v1738744807/big_sale_oowpt4.png"
              alt="Modern Furniture"
              className="object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full shadow-md">
            40% Off
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-4 right-4 flex gap-3 text-gray-500">
        <a href="#" className="hover:text-yellow-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-yellow-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-yellow-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default FurnitureCard;
