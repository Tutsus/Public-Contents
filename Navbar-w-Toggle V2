import { GiAngelWings } from 'react-icons/gi';
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState } from 'react';
export default function Navbar() {

        const [nav, setNav] = useState(false)
         
        const handleNav = () => {
            setNav (!nav); 
        }

    return(
        <nav className='max-w-screen'>
          <div className="flex justify-between sticky lg:mx-24 xl:mx-54 mt-6 rounded-full text-white lg:text-white lg:shadow-md z-50">
            {/* Logo and title */}
            <div className='flex ml-12 cursor-pointer py-2 pb-1'>
              <GiAngelWings size={40} className=' shadow-sm'/>
              <h1 className='text-4xl font-black'>Portfolio</h1>
            </div>
             {/* Desktop navigation */}
            <ul className='lg:flex text-md mt-4 mx-4 font-medium uppercase hidden'>
              <li className='mx-8'><a className='hover:border-b-2 border-white ease-in-out duration-200' href="#">Home</a></li>
              <li className='mx-8'><a className='hover:border-b-2 border-white ease-in-out duration-200' href="#">About</a></li>
              <li className='mx-8'><a className='hover:border-b-2 border-white ease-in-out duration-200' href="#">Skills</a></li>
              <li className='mx-8'><a className='hover:border-b-2 border-white ease-in-out duration-200' href="#">Services</a></li>
              <li className='mx-8'><a className='hover:border-b-2 border-white ease-in-out duration-200' href="#">Contact</a></li>
            </ul>
             {/* Mobile navigation */}
            <div onClick={handleNav} className='flex lg:hidden mx-8 mt-3'>
              {!nav ? <LuX size={40}/> : <LuAlignJustify size={35}/>}
            </div>
            <ul className={!nav ? 'fixed top-20 border-r font-medium lg:hidden uppercase ' : 'fixed left-[-100%]'}>
              <li className='pr-24 pl-4 ml-4 py-6 mr-20 border-b '><a href="#">Home</a></li>
              <li className='pr-24 pl-4 ml-4 py-6 mr-20 border-b '><a href="#">About</a></li>
              <li className='pr-24 pl-4 ml-4 py-6 mr-20 border-b '><a href="#">Skills</a></li>
              <li className='pr-24 pl-4 ml-4 py-6 mr-20 border-b '><a href="#">Services</a></li>
              <li className='pr-24 pl-4 ml-4 py-6 mr-20 '><a href="#">Contact us</a></li>
            </ul>
          </div>
        </nav>
    )
}
