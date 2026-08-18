import InsightJollof from '../assets/insight-jollof.jpg';
import InsightSoup from '../assets/insight-soup.jpg';
import Yam from '../assets/yam.jpg';
import Calendar from '../assets/calendar.png';
import { Link } from "react-router-dom";



function Insight (){
    const dishes =[
        {
            name:"jollof",
            image: InsightJollof,
            title: "The Great Jollof Rice Debate: Nigerian vs Ghanaian",
            description: " Explore the history and cultural significance of Jollof rice, the beloved West African dish that has sparked friendly rivalries."
        },

        {
            name:"soup",
            image: InsightSoup,
            title: "Health Benefits of Traditional Nigerian Soups",
            description: "Discover the nutritional powerhouses hidden in traditional Nigerian soups like Egusi, Ogbono, and Bitter leaf soup."
        },

        {
            name:"yam",
            image: Yam,
            title: "The Art of Pounding Yam: Tradition Meets Technique",
            description: "Learn about the traditional process of pounding yam and why it remains a cherished culinary practice in Nigerian households."
        },
    ]

    return(
        <div className="w-[80%] mx-auto   relative flex flex-col gap-5 ">
            <div className="text-[#313F5E] flex flex-col gap-4 ">
                <h3 className="font-bold text-[28px] ">Insights & Resources</h3>
                <p className="text-lg ">Expert advice, industry insights, and practical tips for electrical systems, power solutions, and security technology</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8   '>
                {dishes.map((dish) => (
                    <div
                        key={dish.name}
                        className='md:w-full lg:w-full w-full shadow lg:h-140 md:h-160 md:pb-0 h-160 pb-10 rounded-3xl flex flex-col gap-3 '
                    >
                        <img 
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-90 rounded-t-3xl "
                        />
                        
                        
                        <div className='px-5 flex flex-col gap-4 '>
                            <h4 className='font-semibold text-2xl text-[#313F5E] '>
                                {dish.title}
                            </h4>
                            <p className='text-sm text-[#848484] '>
                                {dish.description}
                            </p>

                            <div className='flex justify-between text-[#313F5E] text-[12px] items-center '>
                                <div className='flex gap-4 items-center '>
                                    <img src={Calendar} alt="" />
                                    <p>April 20, 2026</p>
                                    <p>.</p>
                                    <p>5 min read</p>
                                </div>
                                
                                <div className='cursor-pointer '>
                                    <Link 
                                        className='cursor-pointer '>
                                        <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                            
                       
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Insight