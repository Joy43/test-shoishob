
import { useAuth } from "./useAuth"


export const useWhishlist = () => {
    const {user}=useAuth()
    const addToWishlist=async(productId)=>{
        if(!user){
            console.log('user is not defind')
            return;
        }
        try{
const response = await fetch("https://fastdeals.ecommatrix.xyz/api/v1/customer/wish-list/add", {cache:"no-store"}, {
    method:"POST",
     
       headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${user.token}`,
       },

  
    body:JSOON.stringify({ productId})

});
const data=await response.json();
if(!response.ok){
    throw new Error(data.message || "Failed to add to wishlist")
}
        }catch (error){
            console.error("Error adding to wishlist ",error);
            return null;

        }
    };
    return {addToWishlist}

  
};
