
const ContactCategory = ({area, address, phone, }) => {
  return (
    <div>
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl text-[#313F5E]  " >{area} </h1>
            <p className="text-[#848484] ">{address} </p>
            <p className="orange-gradient-text">{phone} </p>
        </div>
    </div>
  )
}

export default ContactCategory