import { useAuth } from "@/app/hooks/useAuth";
import axios from "axios";
import Image from "next/image"; 

const Page = async () => {

  const response = await axios.get("https://fastdeals.ecommatrix.xyz/api/v1/customer/wish-list",{cache: 'no-store'});
  
  // Access the data directly from the response object
  const wishlists = response.data;

  return (
    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
        Customer’s Cart
      </p>
      {wishlists.map((item) => (
        <div
          key={item.id}
          className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
        >
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <Image
              className="w-full hidden md:block"
              src={item.image}
              alt={item.name}
              width={160}
              height={200}
              priority
            />
            <Image
              className="w-full md:hidden"
              src={item.imageMobile}
              alt={item.name}
              width={160}
              height={200}
              priority
            />
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                {item.name}
              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">Style: </span> {item.style}
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">Size: </span> {item.size}
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">Color: </span> {item.color}
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">
                ${item.price.toFixed(2)} <span className="text-red-300 line-through"> ${item.originalPrice.toFixed(2)}</span>
              </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
