import Restaurant from '../assets/restaurant.jpg'

const PageHero = ({title, description}) => {
  return (
    <div className='relative flex flex-col items-center'>
        <img 
            src={Restaurant} alt=""
            className='w-full h-180 bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)]/40 z-0 '
        />     

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)] h-180 opacity-70  "></div>
        <div className='flex  md:px-20 flex-col items-center lg:text-start text-center  gap-5 absolute  top-[40%] '>
            <h1 className='font-semibold md:text-8xl text-5xl font-poppins text-white '>
                {title}
            </h1>

            <p className='md:text-2xl text-lg text-white '>
                {description}
            </p>
        </div>

    </div>
  )
}

export default PageHero