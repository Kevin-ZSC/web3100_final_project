

export default function Trail() {
  return (
    <div className="bg-gray-100 w-full sm:w-4/5 mx-auto px-6 py-6 rounded-xl shadow-lg mt-5">
        <h3 className="font-joti text-2xl font-semibold text-center text-black mb-4">
            TRAIL MAP
        </h3>
        <div className="relative">
            <img
            src="/web3100_final_project/assets/img/Trail-Map.jpg"
            alt="Trail Map"
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <p className="absolute bottom-2 right-2 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
            Click to Zoom
            </p>
        </div>
    </div>

  )
}
