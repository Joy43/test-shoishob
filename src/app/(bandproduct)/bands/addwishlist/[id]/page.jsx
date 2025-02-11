"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddWishlist = () => {
    const params = useParams(); 
    const { id } = params;
    const [wishlist, setWishlist] = useState();
    const router = useRouter();
console.log(id)
    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const res = await fetch(`https://fastdeals.ecommatrix.xyz/api/v1/customer/wish-list/add/${id}`);
                if (!res.ok) throw new Error("Failed to fetch wishlist");
                const data = await res.json();
                setWishlist(data);
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchWishlist();
    }, [id]);

    const handleAddWishlist = async () => {
        try {
            const res = await fetch(`https://fastdeals.ecommatrix.xyz/api/v1/customer/wish-list/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                toast.success("Added to wishlist successfully");
                router.push("/wishlist");
            } else {
                toast.error("Failed to add to wishlist");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <h1>Wishlist</h1>
            {wishlist ? (
                <div>
                    <p>{wishlist.name}</p>
                    <button onClick={handleAddWishlist} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add to Wishlist
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AddWishlist;
