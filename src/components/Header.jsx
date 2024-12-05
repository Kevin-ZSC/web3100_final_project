export default function Header() {

  const handleClick = () => {
    
  }

    return (
      <>
        <div className="relative h-80 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../src/assets/img/daniel-frank-z971mh5y47c-unsplash.jpg')"}}>
          
          <div className="flex items-center justify-between px-3 py-2 bg-transparent hover:bg-white hover:cursor-pointer transition-all duration-300 shadow-md z-10">
            <img src="../src/assets/img/menu-bar.png" alt="Menu" className="w-10 hover:cursor-pointer" />
            <img src="../src/assets/img/logo.png" alt="Logo" className="w-16 hover:cursor-pointer -ml-20" onClick={handleClick} />
            
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <img
                  src="../src/assets/img/video-recording.png"
                  alt="Video Recording"
                  className="w-6 h-6"
                />
                <img
                  src="../src/assets/img/hot.png"
                  alt="Hot"
                  className="w-6 h-6"
                />
                <img
                  src="../src/assets/img/Search.png"
                  alt="Search"
                  className="w-6 h-6"
                />
                <img
                  src="../src/assets/img/Shopping-bag-nav.png"
                  alt="Shopping Bag"
                  className="w-6 h-6"
                />
              </div>
  
              <div className="bg-blue-700 hover:bg-blue-800 transition-colors duration-200 rounded-xl flex items-center justify-center w-20 py-2">
                <p className="text-white font-bold ml-2">BOOK</p>
                <img
                  src="../src/assets/img/arrow_drop_down.png"
                  alt="Arrow Down"
                  className="w-5"
                />
              </div>
            </div>
          </div>
  
          <h1 className="text-center text-white font-extrabold text-3xl italic mt-5">Enjoy your Winter Time!</h1>
        </div>
      </>
    );
  }
  