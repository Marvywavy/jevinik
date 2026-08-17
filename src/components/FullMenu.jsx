import MenuCategory from './MenuCategory'
import Abak from '../assets/abak.png'
import Afang from '../assets/afang-menu.png'
import Amala from '../assets/amala.png'
import Assorted from '../assets/assorted.png'
import Beef from '../assets/beef.png'
import Chicken from '../assets/chicken.png'
import Coleslaw from '../assets/coleslaw.png'
import DriedFish from '../assets/dried-fish.png'
import Egusi from '../assets/egusi-menu.png'
import FreshFish from '../assets/fresh-fish.png'
import FriedRice from '../assets/fried-menu.png'
import Garri from '../assets/garri.png'
import JollofRice from '../assets/jollof-menu.png'
import Okro from '../assets/okro-menu.png'
import Moinmoin from '../assets/moinmoin.png'
import Oat from '../assets/oat.png'
import Ofensala from '../assets/ofensala-menu.png'
import Plantain from '../assets/plaintain.png'
import PoundedYam from '../assets/pounded-yam.png'
import Semo from '../assets/semo.png'
import Vegetable from '../assets/vegetable-menu.png'
import WhiteRice from '../assets/white-menu.png'
import Location from './Location'


const FullMenu = () => {

    const menuCategories = [
        {
            name:"Swallow",
            dishes: [
                {
                    name: "Semovita",
                    image: Semo,
                    description: "Smooth, nourishing semolina delight. Your ideal partner for rich soups and stews.",
                    type:"description",
                },
                {
                    name: "Amala",
                    image: Amala,
                    description: "Rich, dark, and hearty. A traditional Nigerian dish waiting to elevate your dining experience.",
                    type:"description",
                },
                {
                    name: "Pounded Yam",
                    image: PoundedYam,
                    description: "Pure comfort, expertly pounded for a flawless pairing with rich sauces.",
                    type:"description",
                },
                {
                    name: "Oat Meal",
                    image: Oat,
                    description: "Oatmeal is rich in essential nutrients, including fiber, vitamins, and minerals. It is known for promoting heart health, aiding digestion, and providing a sustained release of energy",
                    type:"description",
                },
                {
                    name: "Garri",
                    image: Garri,
                    description: "Crisp and satisfying, the perfect side for a taste of authentic West African cuisine.",
                    type:"description",
                },
            ]

        },

        {
            name:"Soups",
            dishes: [
                {
                    name: "Abak",
                    image: Abak,
                    description: "A flavorful blend of Efik ingredients, with some periwinkle to keep you busy.",
                    type:"description",
                },
                {
                    name: "Ofe Owerri Soup",
                    image: Abak,
                    description: "A culinary journey to Owerri, Nigeria, our soup blends assorted meats, local spices, and vegetables for an authentic and flavorful experience.",
                    type:"description",
                },
                {
                    name: "Afang Soup",
                    image: Afang,
                    description: "A delectable Nigerian specialty featuring a vibrant mix of vegetables and protein, a true delight for the senses.",
                    type:"description",
                },
                {
                    name: "Ogbono Soup",
                    image: Afang,
                    description: "A luscious blend of ground ogbono seeds, vegetables, and meats, offering a delightful taste of Nigerian comfort in every bowl.",
                    type:"description",
                },
                {
                    name: "Bitterleaf Soup",
                    image: Ofensala,
                    description: "A bold Nigerian classic, blending the richness of assorted meats with the unique flavor of bitterleaf for an unforgettable culinary experience.",
                    type:"description",
                },
                {
                    name: "Oha",
                    image: Ofensala,
                    description: "A delicious Nigerian specialty, harmonizing the distinct flavor of oha leaves with assorted meats for a taste of culinary excellence.",
                    type:"description",
                },
                {
                    name: "Editan Soup",
                    image: Okro,
                    description: "A harmonious blend of nutritious vegetables and assorted meats with periwinkles, creating a flavorful and hearty Nigerian delicacy.",
                    type:"description",
                },
                {
                    name: "Okro Soup",
                    image: Okro,
                    description: "A delightful medley of fresh okra, vegetables, and choice meats, creating a hearty and satisfying Nigerian dish",
                    type:"description",
                },
                {
                    name: "Egusi Soup",
                    image: Egusi,
                    description: "A delightful melange of ground melon seeds, vegetables, and meats, offering a rich and savory taste of Nigerian cuisine.A luscious blend of ground ogbono seeds, vegetables, and meats, offering a delightful taste of Nigerian comfort in every bowl.",
                    type:"description",
                },
                {
                    name: "Uziza Soup",
                    image: Ofensala,
                    description: "A flavorful Nigerian creation featuring the aromatic uziza leaves, complemented by a blend of spices, vegetables, and meats for a memorable culinary experience.",
                    type:"description",
                },
                {
                    name: "Mama'a Delight Soup",
                    image: Egusi,
                    description: "A savory masterpiece crafted with love, featuring a symphony of flavors that evoke the warmth of home-cooked goodness.",
                    type:"description",
                },
                {
                    name: "Vegetable Soup",
                    image: Vegetable,
                    description: "A tapestry of flavors from Nigeria, where spinach and waterleaf dance with assorted meats in a symphony of taste.",
                    type:"description",
                },
                {
                    name: "Native Soup",
                    image: Vegetable,
                    description: "A celebration of local flavors and culinary tradition, our native soup captures the essence of homegrown ingredients in every taste.",
                    type:"description",
                },
                {
                    name: "White Soup",
                    image: Ofensala,
                    description: "A delightful Nigerian soup featuring a lush blend of periwinkle, and other ingredients, delivering a taste of comfort and tradition .",
                    type:"description",
                },
                
            ]

        },

        {
            name:"Proteins",
            dishes: [
                {
                    name: "Assorted",
                    image: Assorted,
                    type:"simple",
                },
                {
                    name: "Dried Fish",
                    image: DriedFish,
                    type:"simple",
                },
                {
                    name: "Beef",
                    image: Beef,
                    type:"simple",
                },
                {
                    name: "Fresh Fish",
                    image: FreshFish,
                    type:"simple",
                },
                {
                    name: "Chicken",
                    image: Chicken,
                    type:"simple",
                },
                {
                    name: "Goat Meat",
                    image: Beef,
                    type:"simple",
                },
                {
                    name: "Cowleg",
                    image: Beef,
                    type:"simple",
                },
                {
                    name: "Stock Fish",
                    image: FreshFish,
                    type:"simple",
                },
                
            ]

        },

        {
            name:"Rice and Sides",
            dishes: [
                {
                    name: "Jollof Rice",
                    image: JollofRice,
                    description:"A vibrant West African classic, our Jollof Rice is a fragrant and flavorful dish, perfectly seasoned and cooked to perfection for a true taste of celebration.",
                    type:"description",
                },
                {
                    name: "Moinmoin",
                    image: Moinmoin,
                    description:"A steamed delicacy made from ground beans, spices, and other flavorful ingredients, creating a savory and satisfying Nigerian delight.",
                    type:"description",
                },
                {
                    name: "Coleslaw",
                    image: Coleslaw,
                    description:"Crisp and refreshing, our coleslaw is a delightful medley of shredded cabbage and carrots tossed in a tangy dressing—a perfect, crunchy side for any meal.",
                    type:"description",
                },
                {
                    name: "Fried Rice",
                    image: FriedRice,
                    description:"A delicious medley of fragrant rice, colorful vegetables, and savory seasonings, expertly stir-fried to perfection for a delightful culinary experience.",
                    type:"description",
                },
                {
                    name: "Coconut Rice",
                    image: WhiteRice,
                    description:"A tropical twist on a classic dish, our Coconut Rice is a fragrant blend of rice cooked in coconut milk, creating a rich and flavorful experience with every bite.",
                    type:"description",
                },
                {
                    name: "Fried Plantain",
                    image: Plantain,
                    description:"Savor the sweet and savory perfection of our golden fried plantains, a delightful side dish or snack that captures the essence of Caribbean and African cuisine.",
                    type:"description",
                },
                {
                    name: "Stew",
                    image: Egusi,
                    description:"Our savory stew is a culinary masterpiece, featuring a rich blend of aromatic spices and slow-cooked goodness, elevating any dish it accompanies.",
                    type:"description",
                },
                {
                    name: "White Rice",
                    image: WhiteRice,
                    description:"A timeless staple, perfectly cooked to fluffy perfection, offering a versatile base for your favorite sauces and culinary creations.",
                    type:"description",
                },
                
            ]

        },

        {
            name:"Pepper Soups",
            dishes: [
                {
                    name: "Assorted Pepper Soup",
                    image: Assorted,
                    type:"simple",
                },
                {
                    name: "Dried Fish Pepper Soup",
                    image: DriedFish,
                    type:"simple",
                },
                {
                    name: "Beef Pepper Soup",
                    image: Beef,
                    type:"simple",
                },
                {
                    name: "Fresh Fish Pepper Soup",
                    image: FreshFish,
                    type:"simple",
                },
                {
                    name: "Chicken Pepper Soup",
                    image: Chicken,
                    type:"simple",
                },
                {
                    name: "Goat Meat Pepper Soup",
                    image: Beef,
                    type:"simple",
                },
                {
                    name: "Cowleg Pepper Soup",
                    image: Beef,type:"simple",
                },
                {
                    name: "Stock Fish Pepper Soup",
                    image: FreshFish,type:"simple",
                },
                
            ]

        },

    ]
  return (
    <div className='flex flex-col gap-20'>
        <div className='flex flex-col  gap-20 w-full lg:p-20 md:p-16 pl-10 pr-4 '>
            {menuCategories.map((category) =>(
                <MenuCategory
                    key={category.name}
                    name={category.name}
                    dishes={category.dishes}
                />
            ))}

        
        </div>

        <section className="bg-[linear-gradient(to_right,#DE5601_50%,#FD7E32_100%)] py-20 w-full ">
            <Location />
        </section>
    </div>
  )
}

export default FullMenu