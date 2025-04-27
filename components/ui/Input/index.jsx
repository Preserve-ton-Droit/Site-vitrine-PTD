import Search from "../../../public/icons/search.svg";
import Image from "next/image";
const Input = ({ className, placeholder }) => (
    <div className="relative">
        <input
            placeholder={placeholder}
            className={`${className || ""} px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150 w-full pr-10`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Image src={Search} alt="search" width={20} height={20} />
        </div>
    </div>
)



export default Input