import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
    
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link:'home'
        },
        {
            id: 2,
            link:'about'
        },
        {
            id: 3,
            link:'experience'
        },
        {
            id: 4,
            link:'contact'
        }
    ];
  
    return (
    <div className=" bg-black flex justify-between items-center w-full h-20 text-white fixed px-4">
        
        <Link onClick={()=>setNav(false)} to='home' smooth duration={500}>
            <h1 className="font-signature cursor-pointer text-3xl ml-2">Albert's Web-Site</h1>
        </Link>
        
        <ul className="hidden md:flex">
            {links.map(({id, link}) => 
            <li 
            key={id} 
            className="py-2 ml-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 rounded-xl hover:bg-gradient-to-r from-gray-300 to-white hover:text-black"
            >
                <Link className="px-4 py-4"to={link} smooth duration={500}>{link}</Link>
            </li>)} 
        </ul>

        <div onClick={()=>setNav(!nav)} className="rounded-xl hover:bg-gradient-to-r from-gray-300 to-white hover:scale-105 duration-200 cursor-pointer p-2 z-10 md:hidden hover:text-black">
            {nav ? <FaTimes size={30}/> : <FaBars size = {30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            
                {links.map(({id, link}) => 
                <li 
                key={id} 
                className="px-4 cursor-pointer capitalize py-6 text-4xl font-medium text-gray-400 hover:scale-105 duration-200 hover:text-gray-200"
                >
                    <Link onClick={()=>setNav(false)} to={link} smooth duration={500}>{link}</Link>
                </li>)} 
        
            </ul>
        )}

    </div>
  )
}

export default NavBar