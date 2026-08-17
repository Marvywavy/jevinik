import ArticleContent from "../components/ArticleContent"
import Navbar from "../components/Navbar"

const Article = () => {
  return (
    <div className=" ">
       <div className="jevinik-gradient w-full relative h-[30vh] ">
            <Navbar />        
        </div>
      <ArticleContent />
    </div>
  )
}

export default Article