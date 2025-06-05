import { IoIosSearch } from "react-icons/io";

function HeaderSearchBar () {
    return (
        <div className="w-[55%] h-full flex justify-center items-center">
            <div className="w-[80%] h-[80%] relative flex items-center">
                <button className="bg-pink-500 rounded-[50%] w-[50px] h-[50px] absolute flex items-center justify-center right-2">
                    <IoIosSearch className="text-4xl text-white" />
                </button>
                <input className="w-full h-full bg-gray-light rounded-[40px] outline-none text-black px-6 pr-[8rem] placeholder:text-black" placeholder="What are you looking for?" />
            </div>
        </div>
    )
}

export default HeaderSearchBar