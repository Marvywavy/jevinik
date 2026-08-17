import round from '../assets/round-gradient.png'
import Chef from '../assets/values-check.jpg'
import Cook from '../assets/cook.jpg'
import Chefs from '../assets/cook2.jpg'



const AboutPage = () => {
  return (
    <div className='w-[80%] mx-auto relative flex flex-col gap-20 '>
        <div className='flex  text-[#DE5601] mb-10 lg:mb-0 items-center gap-2 text-xl rounded-3xl shadow w-fit px-4 py-2 lg:absolute left-0 -top-4 '>
            <img src={round} alt="" />
            <p className='font-bold'>About Us</p>
        </div>

        <div className='lg:pl-60 w-full md:w-[80%] flex flex-col text-center lg:text-start '>
            <h3 
                className='font-poppins text-[#313F5E] font-semibold text-2xl md:text-5xl lg:text-7xl '> 
                <span className='text-[#DE5601] '>Our </span>  <br className=' hidden lg:block '/>
                <span className='text-[#171F2E] '> Values </span> 
                
            </h3>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 justify-between items-end'>
            <div className='lg:w-[48%] '>
                <img src={Chef} alt="" className='w-full rounded-3xl' />
            </div>

            <div className='flex flex-col gap-2 lg:w-[48%] '>
                <div className='flex flex-col gap-2  '>
                    <div className='flex flex-col gap-2  '>
                        <h4 className='text-[#DE5601] font-semibold text-2xl '>Our Mission</h4>

                        <p className='text-[14px] text-[#313F5E] '>
                            To preserve and celebrate Nigerian culinary heritage by serving authentic, high-quality dishes that bring people
                            together and create lasting memories. We aim to be the premier destination for anyone seeking genuine West 
                            African cuisine.
                        </p>
                    </div>

                    <div className='flex flex-col gap-2  '>
                        <h4 className='text-[#DE5601] font-semibold text-2xl '>Our Vision</h4>

                        <p className='text-[14px] text-[#313F5E] '>
                            To become the leading name in Nigerian and West African cuisine, expanding our reach while maintaining the authenticity and quality that defines 
                            us. We envision a future where Jevinik is synonymous with exceptional Nigerian food.
                        </p>
                    </div>

                        
                </div>

                <div className='flex gap-2  '>
                    <img src={Cook} alt="" className='w-[48%] rounded-3xl ' />
                    <img src={Chefs} alt="" srcset="" className='w-[48%] rounded-3xl ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage