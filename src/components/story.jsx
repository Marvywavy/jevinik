import round from '../assets/round-gradient.png'

function Story() {
  return (
    <div className='w-[80%] mx-auto relative '>
        <div className='flex  text-[#DE5601] mb-10 lg:mb-0 items-center gap-2 text-xl rounded-3xl shadow w-fit px-4 py-2 lg:absolute left-0 -top-4 '>
            <img src={round} alt="" />
            <p className='font-bold'>Jevinik</p>
        </div>

        <div className='lg:pl-40 w-full md:w-[80%] flex flex-col text-center lg:text-start '>
            <h3 
                className='font-poppins text-[#313F5E] font-semibold text-2xl md:text-5xl lg:text-7xl '> 
                <span className='text-[#DE5601] '>Crafted </span> 
                <span className='text-[#FD7E32] '>with love </span> 
                and spiced with passion
            </h3>
        </div>
    </div>
  )
}

export default Story