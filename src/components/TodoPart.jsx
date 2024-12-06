import NavCard from "./NavCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TodoPart() {

  const navCardData = [
    { imageSrc: "../src/assets/img/pass.png", altText: "Ticket Icon", title: "Tickets", link: "/tickets" },
    { imageSrc: "../src/assets/img/rental.png", altText: "Rental Icon", title: "Rentals", link: "/rentals" },
    { imageSrc: "../src/assets/img/skiing.png", altText: "Lesson Icon", title: "Lessons", link: "/lessons" }, 
    { imageSrc: "../src/assets/img/shopping-bag.png", altText: "Shops Icon", title: "Shops", link: "/shops" },
    { imageSrc: "../src/assets/img/restaurant.png", altText: "Restaurant Icon", title: "Restaurant", link: "/restaurant" },
    { imageSrc: "../src/assets/img/helmet.png", altText: "Helmet Icon", title: "Awareness", link: "/awareness" },
  ];

      const [isSmallScreen, setIsSmallScreen] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 768); 
        };
        handleResize(); 
        window.addEventListener("resize", handleResize); 
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const cardsToRender = isSmallScreen ? navCardData.slice(0, 4) : navCardData;

  return (
    <div className="w-5/6 md:w-3/4 lg:w-2/3 bg-gray-100 shadow-2xl z-10 flex flex-col text-center absolute left-1/2 transform -translate-x-1/2 mt-[-10px] p-4 md:p-6 lg:p-8">
      <h2 className="mt-2 text-lg md:text-xl lg:text-2xl font-bold">
        Things to do at Martock.
      </h2>
      <small className="text-gray-500 md:text-sm lg:text-base">
        I&apos;m looking for...
      </small>
      <div className="flex flex-wrap justify-center gap-5 mt-4 md:gap-8">
        {cardsToRender.map((card, index) => (
          <Link to={card.link} key={index}>
          <NavCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
          />
          </Link>
        ))}
      </div>
    </div>
  )
}
