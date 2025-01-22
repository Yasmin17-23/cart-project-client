import React from 'react'
import useCart from '../../hooks/useCart'
import ProductRow from '../../components/ProductRow/ProductRow';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';



const MyCartProduct = () => {
    const [cart, refetch] = useCart();
    const navigate = useNavigate()
    

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              

              axios.delete(`${import.meta.env.VITE_API_URL}/cart/${id}`)
              .then(res => {
                 if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Product has been deleted.",
                        icon: "success"
                      }); 
                 }
              })
            }
          });
    }
    
    const handleCheckout = () => {
          toast.success('Checkout Successfully')
          navigate('/checkout')
    }
    return (
        <div className='my-8 text-center'>
            <h2 className="text-3xl font-bold text-yellow-800">My Cart Product</h2>
            <div className='flex justify-items-start items-center my-6'>
                <h4 className='text-2xl font-bold text-green-900'>Carts: {cart.length}</h4>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Image</th>
                            <td>Description</td>
                            <td>Quantity</td>
                            <th>Price</th>
                            <th>SubTotalPrice</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => (
                                <ProductRow key={item._id} item={item} handleDelete={handleDelete}></ProductRow>
                            ))
                        }
                       
                      
                    </tbody>
                   
                </table>
            </div>
            <hr />
          
           <div className="mt-8 text-right ">
                <button onClick={handleCheckout} className="btn bg-yellow-700 text-white mt-4">
                    Checkout
                </button>
            </div>
           
        </div>
    )
}

export default MyCartProduct