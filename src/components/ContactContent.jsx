import ContactCategory from "./ContactCategory"

const ContactContent = () => {
    const Contacts = [
        {
            area: "Wuse Abuja",
            address: "#494 Bangui Street, Off Ademola Adetokunbo, Wuse 2, Abuja, Nigeria.",
            phone: "07015863699",
        },
        {
            area: "Garki Abuja",
            address: "#1594 Sir Ladoke Akintola Blvd., Off Lagos Street, Garki II, Abuja, Nigeria",
            phone: "07015863699",
        },
        {
            area: "Ikeja, Lagos +Event Hall",
            address: "#21 Isaac John Street, Ikeja G.R.A, Ikeja, Lagos, Nigeria",
            phone: "07015863699",
        },
        {
            area: "Victoria Island, Lagos",
            address: "14b Agoro odiyan street ,off adeola odeku road, Victoria Island, Lagos, Nigeria",
            phone: "07015863699",
        },
        {
            area: "G.R.A, Port Harcourt +Chinese Restaurant +Event Hall",
            address: "#57 Tombia Street, G.R.A Phase 1, Port Harcourt, Rivers State, Nigeria",
            phone: "07015863699",
        },
        {
            area: "Trans Amadi, Port Harcourt +Chinese Restaurant +bakery",
            address: "#93 Trans Amadi Industrial layout, Opp. mother cat junction, Port Harcourt, Rivers State, Nigeria",
            phone: "07015863699",
        },
        {
            area: "Owerri, Imo",
            address: "#19 Umez Eronini Street, Ikenegbu, Owerri, Imo State, Nigeria",
            phone: "07015863699",
        },
        {
            area: "Aba, Abia",
            address: "#11 Brass Street, G.R.A Aba, Abia State, Nigeria",
            phone: "07015863699",
        },
    ]

  return (
    <div className="flex flex-col gap-8 justify-between">
        {Contacts.map((contact) => (
            <ContactCategory
                key={contact.area}
                area={contact.area}
                address={contact.address}
                phone={contact.phone}
            />
        ))}

    </div>
  )
}

export default ContactContent