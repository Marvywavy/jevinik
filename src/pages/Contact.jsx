import ContactContent from "../components/ContactContent"
import ContactForm from "../components/ContactForm"
import PageHero from "../components/PageHero"


const Contact = () => {
  return (
    <div>
        <PageHero 
            title="Contact Us"
            description="Get in touch with us or reserve your table for an unforgettable dining experience"

        />

        <section className="w-full md:p-20 py-10 px-5 flex flex-col lg:flex-row gap-10  ">
          <ContactContent />

          <ContactForm />
        </section>
        

    </div>
  )
}

export default Contact

