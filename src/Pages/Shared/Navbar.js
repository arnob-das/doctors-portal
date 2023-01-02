import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';


const Navbar = () => {

    const [user, userLoading, userError] = useAuthState(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);

    const navigate = useNavigate();

    if (userError || signOutError) {
        return <p className='text-red-500 text-sm'>{userError?.message || signOutError?.message}</p>;
    }

    if (signOutLoading) {
        return <div className="lg:my-20 flex"><button className="btn btn-primary loading mx-auto bg-gradient-to-r from-secondary bg-gradient-to-primary">Processing</button></div>
    }


    // it displays a loader while refreshing the page every time for a short time for the ""userLoading"" variable
    // if (userLoading || signOutLoading) {
    //     return <div className="lg:my-20 flex"><button className="btn btn-primary loading mx-auto bg-gradient-to-r from-secondary bg-gradient-to-primary">Processing</button></div>
    // }


    const logOut = async () => {
        await signOut(auth);
    }

    const menuItems = <>
        <li className="hover:bg-accent hover:text-white"><Link to="/">Home</Link></li>
        <li className="hover:bg-accent hover:text-white"><Link to="/about">About</Link></li>
        <li className="hover:bg-accent hover:text-white"><Link to="/appointment">Appointment</Link></li>
        <li className="hover:bg-accent hover:text-white"><Link to="/reviews">Reviews</Link></li>
        <li className="hover:bg-accent hover:text-white"><Link to="/contact">Contact Us</Link></li>
        {
            user &&
            <li className="hover:bg-accent hover:text-white">
                <Link to="/profile">{user?.displayName}</Link>
            </li>

        }
        <li className="hover:bg-accent hover:text-white">
            {user
                ?
                <Link
                    onClick={() => logOut()}
                    className='btn btn-ghost'
                >
                    Logout
                </Link>
                :
                <Link to="/login">Login</Link>}
        </li>
    </>

    return (
        <div className="navbar bg-base-100 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to="/home">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;