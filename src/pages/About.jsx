import AboutPage from "../components/AboutPage"
import PageHero from "../components/PageHero"
import Story from "../components/story"
import StoryContent from "../components/StoryContent"

const About = () => {
  return (
    <div className="flex flex-col ">
      <PageHero
        title="About Jevinik"
        description="Where Tradtion Meets Excellence"
      />

      <section className="bg-[#F3F4F8] py-40 flex flex-col gap-20 ">
        <Story />
        <StoryContent />
      </section>

        <section className="py-20 ">
          <AboutPage />
        </section>  
        
    </div>
  )
}

export default About