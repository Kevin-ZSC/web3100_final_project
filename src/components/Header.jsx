import NavLinks from "./NavLinks";
import WelcomeText from './WelcomeText'

export default function Header() {

    return (
      <>
        <div className="relative h-80 bg-cover bg-center bg-no-repeat md:h-[40rem]" style={{ backgroundImage: "url('/web3100_final_project/assets/img/daniel-frank-z971mh5y47c-unsplash.jpg')" }}>
          <NavLinks />
          <WelcomeText />
        </div>
      </>
    );
  }
  