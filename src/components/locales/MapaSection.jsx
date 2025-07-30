import { PiMapPin } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";


export const MapaSection = ({ item }) => {
    return (
        <div className="flex flex-col gap-6 max-w-2xl lg:max-w-4xl px-5 md:px-4 xl:px-0 mx-auto w-full">
            <h3
                className="font-fredoka font-extrabold text-[35px] uppercase text-center lg:text-left text-shadow"
            >
                Visítanos
            </h3>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center flex-wrap gap-2 text-black font-semibold">
                <ul className="list-none flex items-center gap-2 flex-col md:flex-row">
                    <li className="flex gap-1.5 items-center">
                        <PiMapPin size={25} /> {item.address}
                    </li>
                    <li className="flex gap-1.5 items-center">
                        <FiPhoneCall size={20} /> {item.phone}
                    </li>
                </ul>
                <div className="text-center lg:text-right">
                    <p>Horario de atención:</p>
                    <ul className="block">
                        {item.open && item.open.map((item) => (<li key={item}>{item}</li>))}
                    </ul>
                </div>
            </div>
            <div className="iframe-map h-80 md:h-[430px] border-4 border-black" dangerouslySetInnerHTML={{ __html: item.map }}>
            </div>
            {/* <ul className="list-none flex flex-col md:hidden items-center gap-2 text-black font-semibold">
                <li className="flex gap-1.5 items-center">
                    <PiMapPin size={25} /> {item.address}
                </li>
                <li className="flex gap-3 items-center">
                    <FiPhoneCall size={20} /> {item.phone}
                </li>
            </ul> */}
        </div>
    )
}
