

export default function NavCard({imageSrc, altText , title}) {
  return (
    <>
    <div className="flex flex-col items-center justify-center space-y-2 ">
      <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all duration-300">
        <img src={imageSrc} alt={altText} className="w-6 h-6" />
      </div>
      <small className="text-xs text-gray-800 font-semibold">{title}</small>
    </div>
  </>
    
  )
}
