import { Tag } from 'lucide-react';
import { User } from 'lucide-react';
import { Calendar } from 'lucide-react';
import Chef from "../assets/Blog-chefs.jpg"
import Technique from './Technique';
import InsightBlog from './InsightBlog';
import Footer from './Footer'

const ArticleContent = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-10 pt-10  w-full md:px-20 px-5 items-center text-center md:text-start md:items-start'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 text-[14px] '>
                        <Tag className="text-[#DE5601]" />
                        <p className='orange-gradient-text font-semibold '>INGREDIENTS</p>
                    </div>
                    <p className='text-[#848484] '>8 min read</p>
                </div>
                <h2 className='text-[#313F5E] font-bold md:text-[30px] text-xl  lg:text-[48px] '>Spice Guide: Essential Nigerian Seasonings</h2>
                <div className='flex items-center text-[#848484] gap-4 '>
                    <div className='flex items-center gap-2 '>
                        <User />
                        <p>Chef Tunde</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <Calendar />
                        <p>May 15, 2026</p>
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <img src={Chef} alt="" className='lg:h-150 md:h-100 h-70 w-full object-cover object-top rounded-4xl ' />
            </div>

            
            <p className=' text-[#848484] md:text-xl text-[14px] '>The magic of Nigerian cuisine lies not just in technique, but in the masterful use of spices and seasonings that 
                have been perfected over centuries. Understanding these essential ingredients is key to unlocking authentic flavors.
            </p>
        

            <Technique />
            
            <p className=' text-[#848484] md:text-sm   '>At Jevinik, we source the finest spices and seasonings to create authentic Nigerian flavors. Come taste the difference 
                that quality ingredients and expert seasoning make in every dish we serve!
            </p>

            <InsightBlog />
        </div>

        

        <Footer />
    </div>
        
  )
}

export default ArticleContent