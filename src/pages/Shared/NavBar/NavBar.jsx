import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto my-5 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4  rounded-box w-52">
                    <NavLink to="/" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg flex justify-between items-center  py-2 px-3 hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Home</NavLink>
                        <NavLink to="/listedbooks" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Listed Books</NavLink>
                       <NavLink to="/readpages" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Pages to Read</NavLink>
                     <NavLink to="/topbooks" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Top Books</NavLink>
                    <NavLink to="/arrivals" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>New Arrivals</NavLink>
                    </ul>

                </div>
                <a className="text-2xl font-bold">Book Fair</a>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1 gap-4">
                <NavLink to="/" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg py-2 px-3  flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Home</NavLink>
                     <NavLink to="/listedbooks" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Listed Books</NavLink>
                     <NavLink to="/readpages" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Pages to Read</NavLink>
                     <NavLink to="/topbooks" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>Top Books</NavLink>
                     <NavLink to="/arrivals" className={({isActive}) => isActive ?
                    ("text-[#23BE0A] text-md rounded-lg  py-2 px-3 flex justify-between items-center hover:border-2 hover:border-[#23BE0A]")
                    :( "text-md text-[#131313CC] flex justify-between items-center")}>New Arrivals</NavLink>
                   
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#23BE0A] text-white mr-3 py-3 px-5">Sign In</button>
                <button className="btn bg-[#59C6D2] text-white  py-3 px-5">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;