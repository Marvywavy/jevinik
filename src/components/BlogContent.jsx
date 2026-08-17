import { User } from 'lucide-react';
import { Calendar } from 'lucide-react';
import BlogChef from '../assets/Blog-chefs.jpg'
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const BlogContent = () => {
  return (
    <div className='w-fit  md:px-10 px-5 '>
        <div className=' flex lg:flex-row  lg:h-200 h-150  gap-0 relative rounded-4xl items-stretch '>
            <div className='w-[60%]  lg:rounded-l-4xl '>
                <img src={BlogChef} alt="" className='rounded-l-4xl  object-cover lg:h-200 h-150 ' />
            </div>

            <div className=' lg:w-[50%] md:w-[80%] w-[50%]  flex flex-col justify-between rounded-r-4xl lg:relative  py-16 lg:px-14 px-5 jevinik-gradient h-full right-0 object-cover  '>
                <div className='flex flex-col gap-10 '>
                    <div className='flex items-center md:gap-10 gap-2 '>
                        <button className='orange-gradient rounded-2xl px-4  py-2 text-white font-bold md:text-sm text-[10px]  '>FEATURED</button>
                        <p className='text-[#F3F4F8] md:text-[16px] text-[12px] '>8 min read</p>
                    </div>

                    <div className='flex flex-col gap-4 '>
                        <h3 className='text-[#F3F4F8] font-semibold md:text-2xl lg:text-5xl '>
                            Spice Guide: Essential Nigerian Seasonings
                        </h3>
                        <p className='font-clash text-[#F3F4F8] md:text-lg text-[14px] '>
                            A comprehensive guide to the spices and seasonings that give Nigerian cuisine its distinctive and unforgettable flavors.
                        </p>
                    </div>
                </div>

                <div className='mt-auto text-[#F3F4F8] lg:text-lg md:text-[16px] text-[12px] flex lg:flex-row flex-col lg:justify-between gap-6 '>
                    <div className='flex flex-col gap-4 '>
                        <p className='flex gap-2'>
                            <User />
                            Chef Adebayo
                        </p>

                        <p className='flex gap-2'>
                            <Calendar />
                            April 20, 2026
                        </p>
                    </div>

                    <div className='orange-gradient px-6 py-3 w-fit rounded-3xl flex items-center '>
                        <Link
                            to={"/article"}
                            className='flex gap-2  '
                        >
                            Read Article
                            <MoveRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default BlogContent