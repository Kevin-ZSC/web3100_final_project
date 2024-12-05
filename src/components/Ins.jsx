

export default function Ins() {
  return (
    <div className="bg-blue-400 w-11/12 sm:w-4/5 mx-auto px-6 py-6 rounded-xl shadow-lg">
        <h3 className="font-joti text-xl font-semibold text-black ml-6 mb-4">Martock on Instagram</h3>

        <div className="flex items-center gap-3 ml-6 mb-4">
          <button className="bg-white font-joti px-4 py-2 rounded-md text-blue-400 font-semibold hover:bg-blue-100 transition-all duration-300">
            Follow Me
          </button>
          <img
            src="../src/assets/img/Instagram.png"
            alt="Instagram Logo"
            className="w-10 h-10 rounded-full"
          />
          <a href="#" className="font-joti text-black font-medium hover:text-gray-200 transition-all duration-300">
            902martock
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="../src/assets/img/lucas-favre-BRTV55ErUZg-unsplash.jpg"
            alt="Instagram Post"
            className="w-4/5 md:w-3/4 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-white font-joti w-32 px-4 py-2 mt-4 rounded-md text-blue-400 font-semibold hover:bg-blue-100 transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
  )
}
