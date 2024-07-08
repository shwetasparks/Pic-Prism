import { Link } from "react-router-dom"



function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed top-5 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30">
            {/* logo */}
            <div className="flex justify-between items-center">
                {/* image */}
                <Link className="font-bold text-3xl" to={'/'}>PicPrism</Link>
            </div>

            <ul className="flex gap-5 text-lg font-semibold text-gray-600">
               <Link to="/" className="hover:text-black cursor-pointer sm:p-2">About</Link>
               <Link to="/" className="hover:text-black cursor-pointer sm:p-2">Contact</Link>
               <Link to="/login" className="hover:text-black cursor-pointer sm:p-2">Login</Link>
               <Link to="/signup" className="hover:text-black cursor-pointer sm:p-2">Signup</Link>
               


            </ul>

        </nav>
    )
}

export default Navbar
