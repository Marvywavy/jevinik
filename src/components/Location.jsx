import roundBlue from '../assets/round-blue.png'

function Location() {
  return (
    <div className='w-[80%] mx-auto relative flex flex-col gap-14  '>
        <div>
            <div className='flex  text-[#171F2E] items-center gap-2 text-xl rounded-3xl mb-10 lg:mb-0 shadow bg-[#FD7E32] w-fit px-4 py-2 lg:absolute -left-5 -top-4 '>
                <img src={roundBlue} alt="" />
                <p className='font-bold'>Location</p>
            </div>

            <div className='lg:pl-40 flex flex-col items-center text-center lg:items-start'>
                <h3 
                    className='font-poppins text-[#F3F4F8] font-semibold 2xl md:text-5xl lg:text-7xl '> 
                    <span className="bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_50%,#171F2E_100%)] bg-clip-text text-transparent">Visit us </span> 
                    at any of our conveniently located restaurants
                </h3>
            </div>
        </div>

        <div className='w-full text-[#F3F4F8] flex flex-col gap-5 '>
            <p className='font-semibold text-2xl '>Opening Hours</p>

            <div className='flex justify-between px-10  py-10 w-full bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)] rounded-[100px] '>
                <p className='font-semibold text-lg '>Jevinik Africana</p>
                <p className='font-extralight text-lg '>Mon - Sat 09:00 am - 10:00 pm</p>
            </div>

            <div className='flex justify-between px-10  py-10 w-full bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)] rounded-[100px] '>
                <p className='font-semibold text-lg '>Jevinik Chinese</p>
                <p className='font-extralight text-lg '>Tue - Sun 11:00 am - 10:00 pm</p>
            </div>
        </div>
    </div>
  )
}

export default Location