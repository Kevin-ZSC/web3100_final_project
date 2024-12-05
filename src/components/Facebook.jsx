

export default function Facebook() {
  return (
    <div className="bg-blue-400 w-11/12 sm:w-4/5 mx-auto px-6 py-6 rounded-xl shadow-lg mt-5">
            <h3 className="font-joti text-xl font-semibold text-black ml-6 mb-4">Martock on Instagram</h3>

            <div className="flex items-center gap-3 ml-6 mb-4">
            <button className="bg-white font-joti px-4 py-2 rounded-md text-blue-400 font-semibold hover:bg-blue-100 transition-all duration-300">
                Follow Me
            </button>
            <img
                src="../src/assets/img/facebook.png"
                alt="facebook Logo"
                className="w-10 h-10 rounded-full"
            />
            <a href="#" className="font-joti text-black font-medium hover:text-gray-200 transition-all duration-300">
                Martock offical
            </a>
            </div>

            <div className="w-4/5 mx-auto h-96 md:w-3/4 rounded-lg shadow-md overflow-y-auto">
        
                <img
                    src="../src/assets/img/jakob-owens-eDnJQL21amc-unsplash.jpg"
                    alt=""
                    className="w-full rounded-t-lg shadow-md transition-all duration-300"
                />
                <div className="p-4">
                    <p>
                    Another sure sign that winter is coming! Members of the Canadian Ski Patrol - Patrouille canadienne de ski attended their annual Lodge Day for updates and skill sharpening. These amazing volunteers are wonderful ambassadors and always there to help. Thanks!
                    </p>
                </div>

                 
                <img
                    src="../src/assets/img/467631059_1073504948115985_3820717846411097302_n.jpg"
                    alt=""
                    className="w-full rounded-t-lg shadow-md transition-all duration-300"
                />
                <div className="p-4">
                    <p>
                    This great group of snow pros stopped by for a visit on Sunday Interested in becoming a snowboard or ski instructor? Already certified and interested in a part time or full time position? Please contact snowschool@martock.com
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="bg-white font-joti w-32 px-4 py-2 mt-4 rounded-md text-blue-400 font-semibold hover:bg-blue-100 transition-all duration-300">
                    Load More
                </button>
            </div>
    </div>
  )
}
