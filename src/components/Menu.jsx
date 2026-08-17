import round from '../assets/round-gradient.png'


function Menu() {
  return (
      <div className='w-[80%] mx-auto relative '>
          <div className='flex  text-[#DE5601] mb-10 lg:mb-0 items-center gap-2 text-xl rounded-3xl shadow w-fit px-4 py-2 lg:absolute left-0 -top-4 '>
              <img src={round} alt="" />
              <p className='font-bold'>Menu</p>
          </div>
  
          <div className='lg:pl-40 w-[80%] flex flex-col items-center lg:items-start  '>
              <h3 
                  className='font-poppins text-center lg:text-start text-[#313F5E] font-semibold text-2xl md:text-5xl lg:text-7xl '> 
                  <span className='text-[#DE5601] '>Our </span> 
                  <span className='text-[#FD7E32] '>Menu </span> 
                  curated for local and international
              </h3>
          </div>
      </div>
    )
}

export default Menu