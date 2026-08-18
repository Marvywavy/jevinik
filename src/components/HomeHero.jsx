import circle from '../assets/circle-fruits.png'
import dish from '../assets/dish.png'
import ellipse from '../assets/ellipse.png'
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import round from '../assets/round-gradient.png'

function HomeHero(){
    return (
        <div className="relative jevinik-gradient lg:h-[100vh] h-320 w-full ">
            <div className='absolute top-[45%] right-[5%] left-[2%]  md:top-20 md:left-[-10%] md:right-[70%] w-110 md:w-150 opacity-50' >
                <img src={circle} alt="" />
                
            </div>

            <div className='   flex flex-col-reverse  md:flex-row text-[#F3F4F8] items-center w-full px-8 md:px-0 md:w-[80%] mx-auto '>
                <div className='md:w-[40%]  flex flex-col gap-4 items-center md:items-start absolute top-[57%] right-[10%] left-[15%] md:left-[5%] md:top-60'>
                    <div className='flex flex-col md:items-start items-center gap-4 md:text-start  text-center '>
                        <h1 className='font-poppins font-medium text-4xl md:text-8xl w-full'>Simply Delicious</h1>
                        <p className='md:p-2 md:text-2xl text-lg '>Authentic Nigerian & West African Cuisine</p>
                    </div>
                    

                    <div className=' '>
                        <Link 
                            to="/menu"
                            className='flex gap-2 items-center bg-gray-400/30  md:p-6 md:pl-8 p-4 pl-6 rounded-4xl w-fit md:text-xl text-[16px] '
                        >
                            <button className=''>
                                Explore our menu  
                            </button>

                            <button className="p-2 rounded-full bg-linear-to-r from-[#DE5601] to-[#FD7E32] flex items-center justify-center">
                                <ArrowUpRight size={18} className='rotate-90 text-[#FFF3EA] ' />
                            </button>

                        </Link>
                    </div>
                </div>
                    
                <div className='absolute top-[20%]  md:top-70 right-[20%] left-[20%]  md:right-0 md:left-[60%]  animate-bounce [animation-duration:3s]'>
                    <img src={dish} alt="" className=' md:w-100 ' />
                    <img src={ellipse} alt="" className=' md:w-75' />
                </div>
            </div>

            <div className='absolute md:top-[30%] top-[10%] left-[60%] right-[10%] md:left-[50%] md:right-[20%] z-10 flex gap-2 text-[#F3F4F8] bg-gray-400/30 text-[16px] items-center w-fit py-1 px-2 rounded-3xl '>
                <img src={round} alt="" className='' />

                <p>Fresh Food</p>
            </div>

            <div className='absolute top-[80%] left-[20%] right-[50%] md:top-[80%] md:left-[40%] md:right-[30%] z-10 flex gap-2 text-[#F3F4F8] bg-gray-400/30 text-[16px] items-center w-fit py-1 px-2 rounded-3xl '>
                <img src={round} alt="" className='' />

                <p>Seasoned Meal</p>
            </div>
        </div>
    )
}

export default HomeHero