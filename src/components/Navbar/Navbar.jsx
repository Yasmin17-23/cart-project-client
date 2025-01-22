import { Link, NavLink } from "react-router"
import logo from "../../assets/images/logo.png";
import useAuth from "../../hooks/useAuth";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [open, setOpen] = useState(false);
   

    return (
        <div className="navbar bg-base-100 flex flex-col md:flex-row">
            <div className="flex-1">
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-16 h-16" />
                    <p className="text-2xl font-bold text-yellow-800">Shop<span className="text-green-800">Slick</span></p>
                </div>
              </div>
              <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"
                        onClick={() => setOpen(!open)}>
                        {
                            open === true ?
                                <AiOutlineClose></AiOutlineClose> :
                                <AiOutlineMenu></AiOutlineMenu>
                        }
                    </div>
                    </div>
                    <div className={`flex-none lg:flex ${open ? 'block' : 'hidden'} lg:block duration-1000`}>
                  <ul className="menu menu-horizontal px-1 flex  flex-col md:flex-row
                    gap-2 lg:flex  "
                  >

                    <li>
                        <Link to="/" className="text-md font-bold hover:text-gray-400
                         hover:bg-yellow-800 mr-3">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/myCart" className="text-md font-bold bg-yellow-600 hover:text-gray-400
                         hover:bg-yellow-800 mr-3 ">
                            <button className="flex items-center">
                               <GiShoppingCart className="text-xl text-white mr-4"/>
                               <span className="badge badge-warning text-white">+ {cart.length}</span>
                            </button>
                           
                        </Link>
                    </li>
                    <li>

                        {
                            user ?

                                <button onClick={logOut}
                                    className="text-md bg-yellow-600 text-white px-8 
                               font-bold hover:text-gray-400 hover:bg-yellow-800">
                                    Log Out
                                </button>

                                :

                                <NavLink to="/login" className="text-md bg-yellow-600 text-white px-8 
                            font-bold hover:text-gray-400 hover:bg-yellow-800">
                                    Login
                                </NavLink>

                        }
                    </li>
                </ul>
            </div>
                
           
        </div>
    )
}

export default Navbar