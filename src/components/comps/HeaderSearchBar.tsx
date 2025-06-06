import { useState, useRef } from "react";
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function HeaderSearchBar () {
    let search = useRef<HTMLInputElement>(null)
    let [typing, checkTyping] = useState<Boolean>(false)
    let [dropped, drop] = useState<Boolean>(false)
    let [chosen, choose] = useState<String>("Shots")
    const dropdown = () => drop(!dropped)
    const checkValue = () => {
        if (search.current) return search.current.value.length > 0
        else return false
    }
    return (
        <div className="w-[55%] h-full flex justify-center items-center">
            <div className="w-[80%] h-[80%] relative flex items-center">
                <div className="absolute right-2 flex justify-end items-center h-full w-min-[40%]">
                    <div className=" w-full flex justify-center items-center relative">
                        {typing ? <RxCross2  className="text-gray-400 w-[15px] h-[15px] mx-3 cursor-pointer hover:text-black" onClick={() => {
                            if (search.current) {
                                search.current.value = ""
                                checkTyping(checkValue())
                            }}} /> : <div />}
                        <button className="flex justify-center items-center cursor-pointer text-black  hover:text-gray-800 text-[12.5px]" onClick={dropdown}>
                            <div className="font-semibold cursor-pointer">{chosen}</div>
                            {dropped ? <IoIosArrowDown className="mx-2 text-1xl cursor-pointer"  /> : <IoIosArrowUp className="mx-2 text-1xl"/>}
                            {dropped ? <div className="absolute w-[125px] h-[150px] bg-white top-[3.5rem] ml-5 rounded-[5px] shadow-[#868686] shadow-md flex justify-between items-center flex-col p-2"> 
                                <div className={`duration-100 text-[15px] w-full h-[42px] flex items-center pl-3 font-${chosen=="Shots" ? "bold" : "medium"} rounded-[5px] border-[1px] border-white hover:bg-gray-50 hover:border-gray-100`} onClick={() => choose("Shots")}>Shots</div>
                                <div className={`duration-100 text-[15px] w-full h-[42px] flex items-center pl-3 font-${chosen=="Designers" ? "bold" : "medium"} rounded-[5px] border-[1px] border-white hover:bg-gray-50 hover:border-gray-100`} onClick={() => choose("Designers")}>Designers</div>
                                <div className={`duration-100 text-[15px] w-full h-[42px] flex items-center pl-3 font-${chosen=="Services" ? "bold" : "medium"} rounded-[5px] border-[1px] border-white hover:bg-gray-50 hover:border-gray-100`} onClick={() => choose("Services")}>Services</div>
                            </div> : <div />}
                        </button>
                    </div>
                    <button className="bg-pink-500 hover:bg-pink-400 duration-150 rounded-[50%] min-w-[50px] min-h-[50px] w-[50px] h-[50px]  flex items-center justify-center">
                        <IoIosSearch className="text-4xl text-white" />
                    </button>
                </div>
                <input ref={search} className="flex justify-center w-full h-full bg-dark-light rounded-[40px] outline-none text-black px-6 pr-[10rem] text-[15px] placeholder:text-black duration-150 border-dark-light border-[2px] border-solid hover:border-pink-300 hover:bg-white focus:border-pink-300 focus:bg-white" placeholder="What are you looking for?" onInput={() => checkTyping(checkValue())} />
            </div>
        </div>
    )
}

export default HeaderSearchBar