import logo from '../assets/jevinik-logo.png'
import { NavLink } from 'react-router-dom'
import { Menu, X } from "lucide-react";
import { useState } from "react";


function Navbar(){
    const links = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    const [isOpen, setIsOpen] = useState(false)

    return(
       <div className='relative w-full text-[#F3F4F8] '>
            <div className='absolute z-1000 max-w-[80%] w-[80%] top-10 md:left-15 left-5 flex justify-between h-30 items-center  '>
                <div className='shrink-0 z-1000'>
                    <img src={logo} alt="Jevinik logo" className="min-w-20 shrink-0" />
                </div>
            
                
                <div className='w-fit hidden md:flex items-center gap-8 bg-gray-400/30 py-6 px-10 rounded-[100px]  '>
                    {links.map((link) =>(
                        <ul
                            key={link.name}
                            className=' '
                        >
                            <li>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive
                                        ? "text-[#DE5601]"
                                        : "text-[#F3F4F8]  cursor-pointer"
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        </ul>
                    ))}
                </div>
            

                <div className='bg-gray-400/30 py-4 px-8 rounded-4xl hidden md:flex '>
                        <button>
                            <NavLink
                            to="/contact"
                            
                            >
                                Reserve Table
                            </NavLink>
                        </button>
                    </div> 

                <div className='flex md:hidden z-600'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        
                    >
                        {isOpen ? <X/> : <Menu/> }
                    </button>
                </div>
                
            </div>

            <div className='w-full relative '>
                    {isOpen && (
                        <div className="md:hidden  flex flex-col transition-all duration-500 z-500   gap-5 mt-5 absolute shadow-2xl top-20 h-[86vh] justify-between py-10 rounded-3xl w-full items-center bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)] ">

                            {links.map((link) => (
                                <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                >
                                {link.name}
                                </NavLink>
                            ))}

                            <div className='bg-gray-400/30 py-4 px-8 rounded-4xl'>
                                <button>
                                    <NavLink
                                    to="/contact"
                                    >
                                        Reserve Table
                                    </NavLink>
                                </button>
                            </div> 
                        </div>

                        
                    )}
                </div>
       </div>
            
    )
}

export default Navbar