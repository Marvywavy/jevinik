import { ConciergeBell } from 'lucide-react';

const MenuCategory = ({ name, dishes }) => {
  return (
    <div className=" flex flex-col gap-20 items-center ">
        <div className="jevinik-gradient flex gap-2 px-5 py-2 rounded-3xl items-center ">
            <ConciergeBell className='text-[#DE5601]' />
            <h2 className='font-semibold text-[#F3F4F8] text-2xl '>{name} </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 w-full">
            {dishes.map((dish) => (
                <div
                    key={dish.name}
                    //
                >
                    {dish.type === "description" ? (
                        <div
                            className=" relative h-full py-10 w-full flex flex-col justify-center rounded-3xl   gap-2 items-start border pl-24 lg:pl-24 pr-5 border-[#AFBBD5]  "
                        >
                            <img src={dish.image} alt="" className="w-30 rounded-full absolute left-[-8%] " />
                            <h3 className='font-semibold text-2xl text-black '  >{dish.name}</h3>

                            <p className='text-[14px] text-[#313F5E] ' >{dish.description}</p>
                        </div>
                    )
                    :
                    (
                        <div
                            className="relative  h-fit py-5 w-full flex flex-col gap-4 items-center rounded-3xl border pl-24 lg:pl-24 pr-5 md:pl-0 border-[#AFBBD5]  "
                        >
                            <img src={dish.image} alt="" className="w-30 rounded-full absolute left-[-8%] -top-1/4 " />
                            <h3 className='font-semibold text-2xl text-black '>{dish.name}</h3>
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuCategory