import PartLesson from "./PartLesson";
import NavLinks from "./NavLinks";
import NewsSignup from './NewsSignUp'
import Footer from './Footer'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lessons() {

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

      

  const lessonsContents = [
    {
      imageUrl: "/assets/img/victoire-joncheray-EF0UG0xFgnA-unsplash.jpg",
      textContent:
        "A snow school lesson is an exciting opportunity for individuals of all ages and skill levels to experience the joy of skiing or snowboarding in a structured and supportive environment.These lessons are typically offered at ski resorts and winter sports facilities,led by certified instructors who tailor their teaching to the needs of the participants.",
      title: "Snow School",
    },
    {
      imageUrl: "/assets/img/ben-koorengevel-QtyErb_h4PU-unsplash.jpg",
      textContent:
        "A private snow school lesson offers a one-on-one (or small group) experience tailored specifically to the participant's needs, skill level, and goals. This personalized approach ensures faster progress, focused attention, and a more comfortable learning environment",
      title: "Private Lessons",
    },
    {
      imageUrl: "/assets/img/nejc-peternelj-SCXuSA6-Szg-unsplash.jpg",
      textContent:
        "Certification lessons are specialized training sessions designed for individuals aiming to become certified ski or snowboard instructors, or for those seeking advanced recognition in their snow sports skills. These lessons focus on mastering technical abilities, teaching methodologies, and safety practices required to pass industry-recognized certification exams.",
      title: "Certification Lessons",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavLinks />
      <div className="xl:px-64">
        {isSmallScreen ?
        <h2 className="ml-8 text-3xl font-semibold mt-8 text-gray-800 ">
          Lessons
        </h2> : 
        <>
          <div className="flex item-center mt-8">
            <Link to='/'>
              <h2 className="ml-8 text-3xl font-semibold  text-gray-800 " >Home</h2>
            </Link>
            
            <img src="../src/assets/img/Chevron right.png" alt="" className="w-10 h-10"/>
            <h2 className=" text-3xl font-semibold  text-gray-800 ">Lessons</h2>
          </div>
          

        </>
        }
        <hr className="mt-3" />

        <div className="mt-3">
          {lessonsContents.map((i, index) => (
            <PartLesson
              key={index}
              imageUrl={i.imageUrl}
              textContent={i.textContent}
              title={i.title}
              reverse={index % 2 === 1}
            />
            
          ))}
          
        </div>
      </div>

      <NewsSignup />
      <Footer />
    </div>
  );
}
