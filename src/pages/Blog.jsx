import BlogContent from "../components/BlogContent"
import PageHero from "../components/PageHero"
import Insight from "../components/Insight"


const Blog = () => {
  return (
    <div className="flex flex-col">
      <PageHero 
          title="Jevinik Blog"
          description="Stories, recipes, and insights from the heart of Nigerian cuisine"

      />

      <section className="bg-[#F3F4F8] lg:py-20 py-10 ">
        <BlogContent />
      </section>

      <section className="py-20 ">
        <Insight />
      </section>
      
  </div>
  )
}

export default Blog