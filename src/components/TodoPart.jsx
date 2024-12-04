import NavCard from "./NavCard";
import { useState, useEffect } from "react";

export default function TodoPart() {

    const navCardData = [
        { imageSrc: "../src/assets/img/pass.png", altText: "Ticket Icon", title: "Tickets" },
        { imageSrc: "../src/assets/img/rental.png", altText: "Rental Icon", title: "Rentals" },
        { imageSrc: "../src/assets/img/skiing.png", altText: "Lesson Icon", title: "Lessons" },
        { imageSrc: "../src/assets/img/shopping-bag.png", altText: "Shops Icon", title: "Shops" },
        { imageSrc: "../src/assets/img/restaurant.png", altText: "Restaurant Icon", title: "Restaurant" },
        { imageSrc: "../src/assets/img/helmet.png", altText: "Helmet Icon", title: "Awareness" },
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

      const cardsToRender = isSmallScreen ? navCardData.slice(0, 5) : navCardData;

  return (
    <div className="w-5/6 bg-gray-100 shadow-2xl z-10 flex flex-col text-center absolute top-[calc(36%+10px)] left-1/2 transform -translate-x-1/2 mt-[-50px]">
      <h2 className="mt-2">Things to do at Martock.</h2>
      <small className="text-gray-300">I&apos;m looking for...</small>
      <div className="flex justify-center gap-5 mt-2 mb-2">
        {cardsToRender.map((card, index) => (
          <NavCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
          />
        ))}
      </div>
    </div>
  )
}
