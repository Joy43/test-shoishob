import axios from "axios";
import Link from "next/link";

const getBands = async () => {
  try {
    const response = await axios.get("https://fastdeals.ecommatrix.xyz/api/v1/brands", {
      cache: "no-store",
    });
    return response.data; // Ensure we return the fetched data
  } catch (error) {
    console.error("Error fetching bands:", error);
    return []; // Return empty array to prevent crashes
  }
};

const Bands = async () => {
  const bands = await getBands();

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 mx-auto">
      {bands.length > 0 ? (
        bands.map((band) => (
          <Link key={band.id} href={`/bands/${band.id}`} className="block h-full">
            <div className="flex flex-col items-center bg-[#f4f4f7] transition-all hover:shadow-xl hover:-translate-y-3 cursor-pointer rounded-sm shadow-sm shadow-purple-900/20 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-xl font-bold text-black tracking-wide truncate max-w-full px-4 text-center mb-2">
                {band?.name}
              </h4>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center text-gray-500">No bands found.</p>
      )}
    </div>
  );
};

export default Bands;
