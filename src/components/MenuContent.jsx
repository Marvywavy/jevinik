import { useRef, useEffect, useState } from "react";
import  AfangMenu from '../assets/afang-menu.png';
import  FriedMenu from '../assets/fried-menu.png';
import  JollofMenu from '../assets/jollof-menu.png';
import  OfensalaMenu from '../assets/ofensala-menu.png';
import  OkroMenu from '../assets/okro-menu.png';
import  VegetableMenu from '../assets/vegetable-menu.png';
import  WhiteMenu from '../assets/white-menu.png';
import  EgusiMenu from '../assets/egusi-menu.png';
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";


function MenuContent() {
  const scrollRef = useRef(null);
  const directionRef = useRef(1); // 1 = right, -1 = left

  const [activeType, setActiveType] = (useState ("All"))

  const dishes = [
    { name: "Afang Soup", image: AfangMenu, category:["Soup", "Swallows", "Pepper Soup", "Proteins",], description: "A timeless staple, perfectly cooked to fluffy perfection, offering a versatile base for your favorite sauces and culinary creations." },
    { name: "Egusi Soup", image: EgusiMenu, category:["Soup", "Swallows","Pepper Soup", "Proteins",], description: "A delightful melange of ground melon seeds, vegetables, and meats, offering a rich and savory taste of Nigerian cuisine." },
    { name: "Jollof Rice", image: JollofMenu, category:["Rice & Sides", "Pepper Soup", "Proteins",], description: "A vibrant West African classic, our Jollof Rice is a fragrant and flavorful dish, perfectly seasoned and cooked to perfection for a true taste of celebration." },
    { name: "Fried Rice", image: FriedMenu, category:["Rice & Sides", "Pepper Soup", "Proteins",], description: "A delicious medley of fragrant rice, colorful vegetables, and savory seasonings, expertly stir-fried to perfection for a delightful culinary experience." },
    { name: "Vegetable", image: VegetableMenu, category:["Soup", "Swallows", "Pepper Soup", "Proteins",], description: "A tapestry of flavors from Nigeria, where spinach and waterleaf dance with assorted meats in a symphony of taste." },
    { name: "Okro", image: OkroMenu, category:["Soup", "Swallows", "Pepper Soup", "Proteins",], description: "A delightful medley of fresh okra, vegetables, and choice meats, creating a hearty and satisfying Nigerian dish" },
    { name: "Ofensala", image: OfensalaMenu, category:["Soup", "Swallows", "Pepper Soup", "Proteins",], description: "A delicious Nigerian specialty, harmonizing the distinct flavor of oha leaves with assorted meats for a taste of culinary excellence." },
    { name: "White Soup", image: WhiteMenu, category:["Soup", "Swallows", "Pepper Soup", "Proteins",], description: "A delightful Nigerian soup featuring a lush blend of periwinkle, and other ingredients, delivering a taste of comfort and tradition ." },
  ];

  const types = [
    {name: "All", },
    {name: "Swallows", },
    {name: "Soup", },
    {name: "Rice & Sides", },
    {name: "Proteins", },
    {name: "Pepper Soup", },
  ]


  const filteredDishes = 
    activeType === "All"
    ? dishes
    : dishes.filter((dish) => dish.category.includes(activeType));

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!el) return;

      const maxScroll = el.scrollWidth - el.offsetWidth;
      const atEnd = el.scrollLeft >= maxScroll - 5;
      const atStart = el.scrollLeft <= 5;

      if (atEnd) directionRef.current = -1;
      if (atStart) directionRef.current = 1;

      el.scrollBy({ left: 350 * directionRef.current, behavior: "smooth" });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[80%] mx-auto min-w-0 flex flex-col gap-10 ">

        <div className="flex lg:flex-row flex-col gap-10 items-center ">
            <div className="lg:w-[35%] md:[60%] w-full text-center lg:text-start ">
                <p className="text-[16px] text-[#313F5E] ">
                    Explore our extensive selection of authentic Nigerian and West African dishes, Come taste the authentic flavours.
                </p>
            </div>

            <div className="w-full lg:w-[60%] flex lg:flex-row flex-col gap-2 lg:justify-between items-center ">
                {types.map((type) => (
                    <button 
                        key={type.name}
                        onClick={() =>  setActiveType(type.name)}
                        className={`border rounded-3xl border-[#313F5E] text-[#313F5E] lg:px-6 px-2 lg:py-2 h-10 w-30 text-[10px] md:text-[14px] lg:text-[16px] transition-all duration-300
                            ${ activeType === type.name
                                ? "bg-[#DE5601] text-white border-[#DE5601]"
                                : "bg-transparent"
                        } `}
                    >
                        {type.name}
                    </button>
                ))}
            </div>
           
        </div>


      <div
        ref={scrollRef}
        className="flex gap-14 overflow-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2 pl-10"
      >
        {filteredDishes.map((dish, i) => (
          <div
            key={dish.name + i}
            className="shrink-0 w-[320px] border border-[#AFBBD5] shadow md:h-60 h-70 rounded-4xl md:w-[40%] w-full  p-2 pl-14 relative flex flex-col gap-2"
          >
            <h1 className="z-0 text-2xl font-semibold ">{dish.name}</h1>
            <p className="z-0 text-[18px] text-[#313F5E] ">{dish.description}</p>
            <img 
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 object-cover rounded-full absolute top-20 -left-10 "
            />
          </div>
        ))}
      </div>

      <div>
        <Link 
            to="/menu"
            className='flex gap-2 items-center bg-[linear-gradient(to_right,#171F2E_0%,#313F5E_70%,#171F2E_100%)] p-6 pl-8 rounded-4xl w-fit text-xl mx-auto'
        >
            <button className=''>
                Explore our menu  
            </button>

            <button className="p-2 rounded-full bg-linear-to-r from-[#DE5601] to-[#FD7E32] flex items-center justify-center">
                <ArrowUpRight size={18} className='rotate-90 text-[#FFF3EA] ' />
            </button>

        </Link>
      </div>
    </div>
  );
}

export default MenuContent;