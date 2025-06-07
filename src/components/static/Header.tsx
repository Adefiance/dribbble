import { useState } from "react";
import HeaderSearchBar from "../comps/HeaderSearchBar"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Header ({ scrolloff=true }) {
  let [dropdown, setDropdown] = useState(false)
  return (
    <div>
      <div className={`bg-white w-full h-[12vh] px-10 flex justify-between items-center ${scrolloff ? "fixed" : "static"}`}>
        <img src="/src/components/assets/logo.png"/>
        <div className="w-[70%] h-full flex">
          {scrolloff ? <HeaderSearchBar /> : <div />}
          <div className="w-[45%] h-full bg-[blue] flex justify-evenly items-center text-black">
            <div className="font-semibold">Explore</div>
          </div>
        </div>
        <div className="w-[12.5%] h-full flex justify-between items-center">
          <button className="bg-white text-black font-bold hover:text-gray-medium duration-150">Sign Up</button>
          <button className="bg-navy text-white font-semibold px-5 py-3 rounded-[40px] hover:bg-gray-hard duration-150">Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Header