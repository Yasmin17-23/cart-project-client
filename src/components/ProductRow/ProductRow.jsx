import React, { useState } from 'react'


const ProductRow = ({ item, handleDelete }) => {
    const { _id, title, image, price, description } = item || {};
    const [quantity, setQuantity] = useState(1);


    const handleIncrement = () => {
        setQuantity(quantity => quantity + 1 );
    }

    const handleDecrement = () => {
        setQuantity(quantity => quantity - 1 );
    }
    const subTotalprice = quantity * price;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>{title}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>{description}</td>
            <td>
            <div className="flex items-center gap-x-4">
                    {/* Quantity Control */}
                    <button
                        onClick={handleDecrement}
                        className="px-2 py-1 text-gray-500 transition-colors duration-200 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className="px-4 py-1 text-center bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-300">
                        {quantity}
                    </span>
                    <button onClick={handleIncrement}
                        className="px-2 py-1 text-gray-500 transition-colors duration-200 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                    >
                        +
                    </button>
                </div>
            </td>
            <td>
                {price.toFixed(2)}
            </td>
            <td>
                {subTotalprice.toFixed(2)}
            </td>
            <td>
                <div className="flex items-center gap-x-6">
                    <button onClick={() => handleDelete(_id)}
                    className="text-gray-500 transition-colors duration-200 
                    dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow