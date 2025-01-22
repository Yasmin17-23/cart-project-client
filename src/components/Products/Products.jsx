import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

const Products = () => {
    const [search, setSearch] = useState('');
    const [productLength, setProductLength] = useState(6);

    const { data: products = [] } = useQuery({
        queryKey: ['products', search],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/products?search=${search}`);
            return res.data;
        }
    })

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);

        e.target.search.value = ''
    }

    return (
        <div className='text-center my-8'>
            <div>
                <div className='my-8'>
                    <h2 className='text-2xl md:text-4xl font-bold text-orange-700'>All Products</h2>
                    <p className='text-yellow-900 font-medium'>Please see our all category products</p>
                </div>
                <div className="flex  items-center justify-end pb-6 md:py-0 md:px-4 md:my-5">
                    <form onSubmit={handleSearch}>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input
                                className="px-6 py-2 text-gray-700 placeholder-gray-500
                         bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 
                         focus:placeholder-transparent dark:focus:placeholder-transparent"
                                type="text" name="search"
                                placeholder="Enter Product Title"
                                aria-label="Enter Product Title" />

                            <button className="px-4 py-3 text-sm font-medium tracking-wider text-orange-500 
                        uppercase transition-colors duration-300 transform bg-orange-200/60 rounded-md
                         hover:bg-gray-600 focus:bg-orange-300/60 focus:outline-none">Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-5 pt-8'>
                {
                    products.slice(0, productLength).map(product => (
                        <ProductCard key={product._id} product={product}></ProductCard>
                    ))
                }
            </div>
            <div className={productLength === products.length ? 'hidden' : undefined}>
                <button onClick={() => setProductLength(products.length)}
                className="bg-orange-300 flex gap-x-3 text-md sm:text-base items-center 
                justify-center text-white rounded-lg hover:bg-orange-800 duration-300 
                transition-colors border border-transparent px-5 py-2.5 mx-auto cursor-pointer my-6">
                    <span>View All Products</span>
                     <HiOutlineViewfinderCircle className='text-xl'/>
                </button>
            </div>
        </div>
    )
}

export default Products