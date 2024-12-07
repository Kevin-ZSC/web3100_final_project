import { useState } from "react"

export default function Footer() {

    const [isShowIcons, setIsShowIcons] = useState(false)

    const handleClick = () => {
        setIsShowIcons(prev => !prev)
    }

  return (

    <div>
        <div className="bg-gray-800 flex justify-between items-center ">
            <div className="flex items-center py-2">
                <img src="../src/assets/img/logo.png" alt="" className="w-16 h-16" />
                <img src= {isShowIcons ? "../src/assets/img/ChevronUp.png" : "../src/assets/img/Chevron down.png"} alt="" className="w-6 h-6 cursor-pointer mt-5 -ml-1" onClick={handleClick} />
                <p className="text-white text-xs ml-3">370 Ski Martock Rd,<br/>
                Windsor, NS B0N 2T0</p>
            </div>
            <div>
                <p className="text-white text-xs mr-4">©2024 Martock LP <br /> 902-798-9501</p>
            </div>
        </div>
          
        <div className={`${isShowIcons ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          } bg-white overflow-hidden transition-all duration-500 ease-in-out`}>
                <div className="flex justify-evenly py-5">
                <img src="../src/assets/img/burton.png" alt="" className="w-10"/>
                <img src="../src/assets/img/CLeeves-2020.png" alt="" className="w-10"/>
                <img src="../src/assets/img/beavertails.png" alt="" className="w-10"/>
                <img src="../src/assets/img/Pepsi2020.png" alt="" className="w-10"/>
                <img src="../src/assets/img/CSP.png" alt="" className="w-10"/>
                <img src="../src/assets/img/head.png" alt="" className="w-10"/>
            </div> 
        </div>

        <div className="flex justify-between px-4 py-3 text-xs bg-slate-300">
            <p>@CopyRight</p>
            <nav className="flex gap-2 text-xs underline">
                <a href="#">Jobs</a>
                <a href="#">Private Policy</a>
                <a href="#">Term of Service</a>
                <a href="#">Accessibility</a>
            </nav>
        </div>
    </div>
  )
}
