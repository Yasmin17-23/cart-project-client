import React from 'react'
import { FaFacebook,  FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-200 text-base-content rounded p-2">
            <nav className="grid grid-flow-col gap-4 mt-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                      <FaFacebook  className='text-2xl text-[#4267B2]'/> 
                    </a>
                    <a>
                      <FaYoutube className='text-2xl text-[#FF0000]'/> 
                    </a>
                    <a>
                      <FaInstagram className='text-2xl text-[#E1306C]'/>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ShopSlick</p>
            </aside>
        </footer>
    )
}

export default Footer