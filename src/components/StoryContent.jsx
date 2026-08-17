import storyFlex from '../assets/story-flex.jpg';
import storyFlex2 from '../assets/story-flex2.jpg';
import storyMain from '../assets/story-main.jpg';

function StoryContent() {
  return (
    <div className='flex flex-col lg:flex-row w-[80%] mx-auto gap-10 lg:items-end shrink-0 md:items-start '>
        <div className='flex flex-col gap-4 md:gap-1 w-full lg:w-[48%] shrink-0 '>
            <div>
                <h4 className='text-[#DE5601] font-semibold text-2xl lg:text-4xl '>Our Story</h4>
            </div>

            <div className='text-[#313F5E] text-sm shrink-0 flex flex-col gap-3 '>
                <p>
                    Jevinik Restaurant was born from a passion for authentic Nigerian and West African cuisine. 
                    What started as a dream to share the rich culinary heritage of Nigeria has blossomed into two thriving locations serving 
                    thousands of satisfied customers.
                </p>

                <p>
                    Our name, Jevinik, represents our commitment to excellence and authenticity. Every dish we serve is prepared using 
                    traditional methods passed down through generations, combined with modern culinary techniques to create an unforgettable 
                    dining experience.
                </p>

                <p>
                    From our signature Jollof Rice that settled the age-old debate to our perfectly crafted soups and swallows, we take pride 
                    in being the destination for anyone seeking genuine Nigerian flavors.
                </p>
            </div>

            <div className='flex gap-7 '>
                <img src={storyFlex} alt=""  className='w-[46%] rounded-3xl '/>
                <img src={storyFlex2} alt=""  className='w-[46%] rounded-3xl '/>
            </div>
        </div>

        <div className='lg:w-[48%] w-full '> 
            <img src= {storyMain} alt="" className='rounded-3xl ' />
        </div>
    </div>
  )
}

export default StoryContent