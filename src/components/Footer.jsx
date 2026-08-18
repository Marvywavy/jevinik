import FooterLogo from '../assets/footer-logo.png'
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Logo from '../assets/logo-gri.png'
import Whatsap from '../assets/whatsap.png'
import Linkd from '../assets/link.png'
import Twit from '../assets/twit.png'
import Face from '../assets/face.png'
import Insta from '../assets/insta.png'


const Footer = () => {
  return (
    <div className='flex flex-col gap-10 '>
        <div className="bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)]  h-114.75 relative flex flex-col justify-center  ">
            <div className='rotate-350 lg:opacity-40 opacity-20 text-white md:w-70 w-50 absolute top-8 left-20 '>
                <img src={FooterLogo} alt="Footer logo"  />
            </div>

            <div className='flex flex-col items-center place-items-center text-[#F3F4F8] gap-10 '>
                <div className='flex flex-col items-center place-items-center lg:w-full w-[80%] text-[#F3F4F8] gap-4'>
                    <h4 className='font-bold text-3xl '>Experience the Jevinik Difference</h4>
                    <p className='text-xl '>Come taste the authentic flavors that have made us a favorite among lovers of Nigerian cuisine</p>
                </div>
                    
                <Link 
                    to="/menu"
                    className='flex gap-2 items-center bg-[linear-gradient(to_right,#DE5601_0%,#FD7E32_70%,#DE5601_100%)] p-6 pl-8 rounded-4xl w-fit text-xl mx-auto'
                >
                    <button className=''>
                        Explore our menu  
                    </button>

                    <button className="p-2 rounded-full bg-linear-to-r from-[#171F2E] to-[#465B85] flex items-center justify-center">
                        <ArrowUpRight size={18} className='rotate-90 text-[#FFF3EA] ' />
                    </button>

                </Link>
            </div>
        </div>

        <div className='w-[80%] mx-auto  '>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 '>
                <div className=' text-[16px] flex flex-col gap-4 col-span-1 '>
                    <img src={Logo} alt="Footer logo" className='w-25 '  />

                    <p className='text-[#848484] '>
                        Simply Delicious. Authentic Nigerian & West African cuisine served with love and tradition.
                    </p>

                    <div className='flex gap-3 '>
                        <img src={Whatsap} alt="" className='w-5' />
                        <img src={Linkd} alt="" className='w-5' />
                        <img src={Insta} alt="" className='w-5' />
                        <img src={Twit} alt="" className='w-5' />
                        <img src={Face} alt="" className='w-5' />
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 col-span-3'>
                    <div className='flex flex-col gap-4  ' >
                        <h5 className='font-semibold text-xl text-[#313F5E] '>Quick Links</h5>
                        <div className='flex flex-col gap-3' >
                            <Link
                                to="/about"
                                className='text-[#848484] text-[16px] '
                            >
                                Know More About us
                            </Link>

                            <Link
                                to="/menu"
                                className='text-[#848484] text-[16px] '
                            >
                                Check out our Menu
                            </Link>

                            <Link
                                to="/location"
                                className='text-[#848484] text-[16px] '
                            >
                                See Locations near you
                            </Link>

                            <Link
                                to="/contact"
                                className='text-[#848484] text-[16px] '
                            >
                                Book A Reservation
                            </Link>
                        </div>
                            
                    </div>

                    <div className='flex flex-col gap-4  ' >
                        <h5 className='font-semibold text-xl text-[#313F5E] '>Opening and closing time</h5>
                        <div className='flex flex-col gap-3' >
                            <p className='text-[#848484] text-[16px] '> Jevinik Africana </p>

                            <p className='text-[#848484] text-[16px] '> Mon-Sat: 9AM - 10PM </p>

                            <p className='text-[#848484] text-[16px] '> Jevinik Chinese </p>

                            <p className='text-[#848484] text-[16px] '> Tue-Sun: 11AM - 10PM </p>
                        </div>
                            
                    </div>

                    <div className='flex flex-col gap-4  ' >
                        <h5 className='font-semibold text-xl text-[#313F5E] '>Contact Us</h5>
                        <div className='flex flex-col gap-3' >
                            <p className='text-[#848484] text-[16px] '> Nigeria </p>

                            <p className='text-[#848484] text-[16px] '> +234 XXX XXX XXXX </p>

                            <p className='text-[#848484] text-[16px] '> info@jevinik.com </p>
                        </div>
                            
                    </div>
                </div>

            </div>
        </div>

        <div className="bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)]  h-30 relative flex flex-col justify-center  ">
            <div className='lg:w-[80%] w-full px-8 lg:px-0 mx-auto flex flex-col md:flex-row md:justify-between gap-4 text-white md:text-[12px] text-[10px] lg:text-[16px] '>
                <p>© 2026 Jevinik Restaurant. All rights reserved.</p>

                <div className='flex gap-10 '>
                    <p>Privacy Policy</p>

                    <p>terms of service</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer