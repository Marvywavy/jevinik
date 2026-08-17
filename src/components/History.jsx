import round from '../assets/round-gradient.png'

function History() {
  return (
    <div className='w-[80%] mx-auto relative '>
        <div className='flex  text-[#DE5601] mb-10 lg:mb-0 items-center gap-2 text-xl rounded-3xl shadow w-fit px-4 py-2 lg:absolute left-0 -top-4 '>
            <img src={round} alt="" />
            <p className='font-bold'>History</p>
        </div>

        <div className='pl-40'>
            <h3 
                className='font-poppins text-[#313F5E] font-semibold text-2xl md:text-7xl '> 
                <span className='text-[#DE5601] '>3</span> 
                <span className='text-[#FD7E32] '>8 </span> 
                <span className='text-[#DE5601] '>ye</span> 
                <span className='text-[#FD7E32] '>ars </span> 
                working for you
            </h3>
        </div>
    </div>
  )
}

export default History