import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-240px)]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Main