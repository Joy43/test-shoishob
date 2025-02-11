'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Loading from '@/app/loading';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://fastdeals.ecommatrix.xyz/api/v1/products/$[id]`);
        setProduct(res.data.product);
      } catch (err) {
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loading text="Fetching product details..." />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button className="mb-4 text-blue-600 hover:underline" onClick={() => router.back()}>
        ← Back to Products
      </button>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Image
              className="w-full object-cover rounded-lg"
              src={product.thumbnail
                ? `https://fastdeals.ecommatrix.xyz/storage/app/public/product/thumbnail/${product.thumbnail}`
                : '/images/default-placeholder.png'}
              alt={product.name}
              width={500}
              height={300}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
            <p className="text-xl text-orange-500 mt-2">৳ {product?.unit_price}</p>
            {product?.discount && (
              <p className="text-red-500 text-lg font-semibold">Discount: {product?.discount}%</p>
            )}
            <div className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: product?.details }}></div>
            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition text-lg">
                Buy Now
              </button>
              <button
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition text-lg"
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
