import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        Fullname :"Titilayo",
        email :"",
        phone:"",
        messages:"",
    })

    const handleChange = (e) => {
        const {name, value } = e.target;

        setFormData((prev) =>({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };


    

  return (
    <div className="lg:w-[50%] w-full ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-[#313F5E] ">

            <div className="flex flex-col gap-2  ">
                <label htmlFor="fullname">
                Fullname
                </label>

                <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="border border-[#CEDAF2] outline-none w-full py-2 h-16 rounded-xl "
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email">
                Email
                </label>

                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#CEDAF2] outline-none w-full py-2 h-16 rounded-xl "
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="phone">
                Phone number
                </label>

                <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-[#CEDAF2] outline-none w-full py-2 h-16 rounded-xl "
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message">
                Message
                </label>

                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-[#CEDAF2] outline-none w-full py-2 h-105 rounded-xl px-4 "
                placeholder="Type your message..."
                />
            </div>

            <button type="submit" className="w-full bg-[#313F5E] text-[#EFF3FB] py-4 font-semibold rounded-4xl cursor-pointer ">
                Send Message
            </button>

            </form>
    </div>
  )
}

export default ContactForm
