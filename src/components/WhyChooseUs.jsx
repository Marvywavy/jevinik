import {ChefHat, Star, Clock3, Award,} from "lucide-react";

function WhyChooseUs(){
    const features = [
    {
        icon: ChefHat,
        title: "Expert Chefs",
        description: "Traditional recipes perfected over generations",
    },
    {
        icon: Star,
        title: "Premium Quality",
        description: "Fresh ingredients sourced daily",
    },
    {
        icon: Clock3,
        title: "Fast Service",
        description: "Quick preparation without compromising taste",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Recognized for authentic cuisine",
    },
    ];
    return(
        <div className="w-[80%] mx-auto  ">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    
                    return(
                        <div
                            key={feature.title}
                            className="flex flex-col gap-2 items-center text-center">
                            <div className="w-fit p-2 bg-gray-400/30 rounded-full">
                                <Icon
                                    size={24}
                                    className="text-[#5E77AA] "
                                />
                            </div>  

                            <h2 className="font-bold text-xl text-[#474747] ">
                                {feature.title}
                            </h2>

                            <p className="text-[#848484] text-sm ">
                                {feature.description}
                            </p>
                        </div>
                    )
                })}
            </div>  
        </div>
    )
}

export default WhyChooseUs