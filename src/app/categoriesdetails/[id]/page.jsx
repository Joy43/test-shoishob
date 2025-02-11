'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import Image from "next/image";

function Categoriesdetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(product)
  useEffect(() => {
    if (!slug) return;

    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`https://fastdeals.ecommatrix.xyz/api/v1/categories/products/${slug}`);
        const matchedProduct = res.data?.find((prod) => prod.slug === slug); 
       console.log(matchedProduct)
        if (matchedProduct) {
          setProduct(matchedProduct);
          setMainImage(matchedProduct.images[0]);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.error("Error fetching product details:", err.response || err.message);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [slug]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {loading && <Loading text="Loading product details..." />}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {product && (
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
          {mainImage && (
            <Image
              width={500}
              height={500}
              src={`https://fastdeals.ecommatrix.xyz/storage/app/public/product/${mainImage}`}
              alt={product.name}
              className="w-full h-auto object-cover rounded-md"
            />
          )}
          <p className="text-gray-600 mt-4">{product.description}</p>
          {/* Add more product details here */}
        </div>
      )}
    </div>
  );
}

export default Categoriesdetails;
