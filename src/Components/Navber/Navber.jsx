import { useState } from "react";
import Link from "../Link/Link";
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { FaRegHandPointer } from 'react-icons/fa';

const Navber = () => {
    const [open , setOpen] =useState([])
    const routes = [
        { id: 1, path: '/', name: 'Home' }, 
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' }, 
        { id: 4, path: '/contact', name: 'Contact' }, 
        { id: 5, path: '*', name: 'Profile' }
    ];

    return (
        <nav>
            <div className={`md:hidden text-xl bg-red-500 text-white p-4  `
        } onClick={()=> setOpen(!open)}>
                {
                    open === true ? <FaRegHandPointer/> : 
                    <BsFillMenuButtonWideFill className=" " /> 
                }
           
            </div>
            <ul  className={`md:flex absolute md:static bg-red-500 text-white p-3 duration-1000 ${open ? 'top-28' : '-top-60'} `}>
            {
                routes.map(rout=> <Link key={rout.id} rout={rout}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navber;