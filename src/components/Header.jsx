import NavLinks from "./NavLinks";

export default function Header() {

    return (
      <>
        <div className="relative h-80 bg-cover bg-center bg-no-repeat md:h-[40rem]" style={{ backgroundImage: "url('../src/assets/img/daniel-frank-z971mh5y47c-unsplash.jpg')" }}>
          
          <NavLinks />
  
          <h1 className="text-center text-white font-extrabold text-3xl italic mt-5 md:mt-20 md:text-5xl lg:text-6xl">Enjoy your Winter Time!</h1>
        </div>
      </>
    );
  }
  