import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_BASE_URL = "https://fastdeals.ecommatrix.xyz/api/v1/products";

export const useProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (endpoint, method = "GET", body) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: `${API_BASE_URL}/${endpoint}`,
        method,
        data: body,
      });
      setData(response.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export const useProductDetails = (slug) => {
  const { data, loading, error, fetchData } = useProducts();
  
  useEffect(() => {
    if (slug) fetchData(`details/${slug}`);
  }, [slug, fetchData]);
  
  return { data, loading, error };
};

export const useProductReviews = (productId) => {
  const { data, loading, error, fetchData } = useProducts();

  useEffect(() => {
    if (productId) fetchData(`reviews/${productId}`);
  }, [productId, fetchData]);

  return { data, loading, error };
};

export const submitProductReview = async (reviewData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reviews/submit`, reviewData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to submit review");
  }
};
