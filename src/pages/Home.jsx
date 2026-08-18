import HomeHero from "../components/HomeHero"
import WhyChooseUs from "../components/WhyChooseUs"
import HistorySwiper from "../components/HistorySwiper"
import History from "../components/History"
import Story from "../components/story"
import StoryContent from "../components/StoryContent"
import Menu from "../components/Menu"
import MenuContent from "../components/MenuContent"
import Location from "../components/Location"
import Insight from "../components/Insight"


function Home(){
    return(
        <div className="flex flex-col gap-20 w-full items-center ">
            <section className="bg-[#F3F4F8] flex flex-col gap-20 pb-25">
                <HomeHero />
                <WhyChooseUs />
                <History />
                <HistorySwiper />
                <Story />
                <StoryContent />
            </section>

            <Menu />
            <MenuContent />

            <section className="bg-[linear-gradient(to_right,#DE5601_50%,#FD7E32_100%)] py-20 w-full ">
                <Location />
            </section>

            <Insight />
        </div>
    )
}

export default Home