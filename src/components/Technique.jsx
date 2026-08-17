
const Technique = () => {
    const techniques = [
        {
            category: "The Foundation: Pepper Varieties",

            description:
            "Nigerian cooking relies heavily on various peppers, each bringing unique heat and flavor.",

            ingredients: [
            {
                ingredient: "Scotch Bonnet Peppers",

                description:
                "The star of Nigerian heat, these colorful peppers provide:",

                points: [
                "Intense heat (100,000–350,000 Scoville units)",
                "Fruity, slightly sweet undertones",
                "Essential for authentic pepper soup and stews",
                ],
            },

            {
                ingredient: "Cayenne Pepper",

                description:
                "Ground cayenne pepper offers:",

                points: [
                "Consistent heat level",
                "Easy to measure and control spiciness",
                "Perfect for dry rubs and seasoning blends",
                ],
            },
            ],
        },

        {
            category: "Aromatic Seasonings",

            description: "",

            ingredients: [
            {
                ingredient: "Curry Powder",

                description:
                "Nigerian curry powder is distinct from other varieties:",

                points: [
                "More turmeric-forward for vibrant yellow color",
                "Essential for Jollof rice and fried rice",
                "Adds warmth without overwhelming heat",
                ],
            },

            {
                ingredient: "Thyme",

                description:
                "Dried thyme is a Nigerian kitchen staple:",

                points: [
                "Used in virtually every soup and stew",
                "Provides earthy, slightly minty notes",
                "Pairs perfectly with tomato-based dishes",
                ],
            },

            {
                ingredient: "Bay Leaves",

                description:
                "These subtle leaves contribute:",

                points: [
                "Depth and complexity to long-cooked dishes",
                "Aromatic notes that develop over time",
                "Traditional presence in rice dishes",
                ],
            },
            ],
        },

        {
    
            category: "The Flavor Boosters",

            description: "",

            ingredients: [
                {
                    ingredient:"Bouillon Cubes (Maggi/Knorr)",
                    description:"Love them or debate them, bouillon cubes are ubiquitous in Nigerian cooking:",

                    points:[
                        "Provide umami depth and saltiness",
                        "Come in various flavors (chicken, beef, crayfish)",
                        "Used in soups, stews, and rice dishes",
                    ]
                },

                {
                    ingredient:"Locust Beans (Iru/Dawadawa)",
                    description:"This fermented ingredient is a game-changer:",

                    points:[
                        "Pungent aroma that mellows when cooked",
                        "Adds deep umami flavor",
                        "Essential for authentic vegetable and bitterleaf soups",
                    ]
                },

                {
                    ingredient:"Crayfish (Ground Dried Shrimp)",
                    description:"Dried crayfish brings oceanic depth:",

                    points:[
                        "Intense seafood flavor without fresh fish",
                        "Adds protein and calcium",
                        "Essential in most traditional soups",
                    ]
                }
            ],
        },

        {
            category: "Fresh Aromatics",

            description: "",

            ingredients: [
                {
                    ingredient:"Onions",
                    description:"The foundation of flavor building:",

                    points:[
                        "Red onions for stews and Jollof",
                        "Yellow onions for general cooking",
                        "Fresh green onions for garnish",
                    ]
                },

                {
                    ingredient:"Garlic and Ginger",
                    description:"This powerful duo appears in countless recipes:",

                    points:[
                        "Often used in equal proportions",
                        "Blended into a paste for easy use",
                        "Essential for marinades and pepper soups",
                    ]
                },
            ],
        },

        {
            category: "Specialty Spices",

            description: "",

            ingredients: [
                {
                    ingredient:"Ehuru (Calabash Nutmeg)",
                    description:"This West African spice offers:",

                    points:[
                        "Warm, aromatic flavor similar to nutmeg",
                        "Traditional use in pepper soups",
                        "Medicinal properties in traditional medicine",
                    ]
                },

                {
                    ingredient:"Uziza Seeds and Leaves",
                    description:"Both forms of uziza are prized:",

                    points:[
                        "Seeds: peppery, slightly bitter",
                        "Leaves: aromatic, slightly pungent",
                        "Used in soups and as a finishing touch",
                    ]
                },
            ],
        },

        {
            category: "Building Your Spice Collection",

            description: "Start with these essential spices and expand gradually:",

            ingredients: [
                {
                    ingredient:"Beginner's Kit:",
                    description:"",

                    points:[
                        "Scotch bonnet peppers (fresh or dried)",
                        "Curry powder",
                        "Dried thyme",
                        "Bouillon cubes",
                        "Ground crayfish",
                    ]
                },

                {
                    ingredient:"Intermediate Addition:",
                    description:"",

                    points:[
                        "Locust beans (iru)",
                        "Bay leaves",
                        "Cayenne pepper",
                        "Fresh ginger and garlic",
                    ]
                },

                {
                    ingredient:"Advanced Collection:",
                    description:"",

                    points:[
                        "Ehuru (calabash nutmeg)",
                        "Uziza seeds and leaves",
                        "Various pepper soup spice blends",
                    ]
                },
            ],
        },

        {
            category: "Storage Tips",

            description: "",

            ingredients: [
                {
                    ingredient:"",
                    description:"",

                    points:[
                        "Keep dried spices in airtight containers away from light",
                        "Replace ground spices every 6-12 months for best flavor",
                        "Freeze fresh ginger-garlic paste in ice cube trays",
                        "Store dried peppers in the freezer to maintain color and potency",
                    ]
                },
            ],
        },

    ];

  return (
    <div className=" flex flex-col gap-20 ">
        {techniques.map((technique) =>(
            <div
                key={technique.category}
                className="flex flex-col gap-10"
            >

                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-col gap-2 ">
                        <h2 className="orange-gradient-text text-[32px] font-bold ">
                            {technique.category}
                        </h2>
                        <p className="text-[#848484] text-base ">
                            {technique.description}
                        </p>

                    </div>
                        
                    
                    <div className="flex flex-col gap-3 ">
                        {technique.ingredients.map((item) =>(
                            <div
                                key={item.ingredient}
                                className="text-[#848484] flex flex-col gap-2 "
                            >
                                <h3 className="text-[#313F5E] font-bold text-2xl ">
                                    {item.ingredient}
                                </h3>
                                <p>
                                    {item.description}
                                </p>

                                <div className="pl-8 flex flex-col gap-2">
                                    {item.points.map((point) => (
                                        <p key={point}>
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        ))}
    </div>
  )
}

export default Technique