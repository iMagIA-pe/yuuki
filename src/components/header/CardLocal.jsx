import { FiPhoneCall } from "react-icons/fi";

export const CardLocal = ({ name, phone, open }) => {
    return (
        <div className="w-full border p-4 flex flex-col gap-4">
            <h4 className="text-2xl font-steelfish font-extrabold uppercase">{name}</h4>
            <div>
                <p className="flex gap-2 text-sm items-center"><FiPhoneCall height={20} /> {phone}</p>
                <p className="text-sm">Horario de atención:
                    <ul className="block">
                        {open && open.map((item) => (<li key={item}>{item}</li>))}
                    </ul>
                </p>
            </div>
        </div>
    )
}
