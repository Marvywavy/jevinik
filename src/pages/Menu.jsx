import FullMenu from "../components/FullMenu"
import PageHero from "../components/PageHero"


const Menu = () => {
  return (
    <div className="flex flex-col gap-20 ">
        <PageHero 
            title="Our Menu"
            description="Explore our extensive selection of authentic Nigerian and West African dishes"

        />

        <FullMenu />
    </div>
  )
}

export default Menu