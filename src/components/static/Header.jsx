import logo from "../assets/logo.png"
import HeaderSearchBar from "../comps/HeaderSearchBar"

function Header ({ scrolloff=true }) {
  return (
    <div>
      <div className={`bg-white w-full h-[12vh] px-10 flex justify-between items-center`}>
        <img src={logo}/>
        <div className="w-[70%] h-full bg-[red] flex">
          {scrolloff == true ? <HeaderSearchBar /> : <div />}
          <div className="w-[45%] h-full bg-[blue]">
            
          </div>
        </div>
        <div className="w-[12.5%] h-full flex justify-between items-center">
          <button className="bg-white text-black font-bold">Sign Up</button>
          <button className="bg-navy text-white font-semibold px-5 py-3 rounded-[40px]">Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Header