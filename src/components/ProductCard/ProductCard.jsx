import React from 'react'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import useCart from '../../hooks/useCart';

const ProductCard = ({ product }) => {
    const { _id, image, title, category, price, description } = product;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart();

    const handleAddToCart = item => {
        if(user && user.email){
           console.log(user.email, item)

           const cartItem = {
               productId: _id,
               email: user.email,
               title,
               image, 
               price,
               description,

           }
           axios.post(`${import.meta.env.VITE_API_URL}/carts`, cartItem)
           .then(res => {
              console.log(res.data);
              if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${title} is added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
                  //refetch data
                  refetch();
              }
           })
        } 
        else{
            Swal.fire({
                title: "You are not Logged In?",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: location.pathname})
                }
              });
        }
    }
    return (
        <div>
            <div className="md:max-w-xs overflow-hidden bg-white mt-5 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p className="mt-1 text-sm font-semibold text-orange-800 dark:text-orange-400">
                        {category}
                    </p>
                </div>

                <img className="object-cover w-full h-48 mt-4" 
                src={image} alt="NIKE AIR" />

                    <div className="flex items-center justify-between px-4 py-2 bg-yellow-700">
                        <h1 className="text-lg font-bold text-white">${price}</h1>
                        <button onClick={() => handleAddToCart(product)}
                        className="px-2 py-1 text-xs font-semibold text-gray-900 
                        uppercase transition-colors duration-300 transform bg-white rounded hover:text-yellow-700
                         hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                    </div>
            </div>
        </div>
    )
}

export default ProductCard