import { useEffect, useState } from "react";
import anime from "animejs";

export default function AnimatedText() {
  const [text] = useState("Enjoy Your Winter time!");

  useEffect(() => {
    const textElement = document.getElementById("animateMe");
    const letters = text
      .split("")
      .map((char) => {
        return char === " "
          ? '<span class="space">&nbsp;</span>'
          : `<span>${char}</span>`;
      })
      .join("");
    textElement.innerHTML = letters;

    const animation = anime.timeline({
      targets: "#animateMe span",
      delay: anime.stagger(50),
      loop: true,
    });

    animation
      .add({
        translateY: -40,
        color: "#FF5733",
        duration: 500,
      })
      .add({
        translateY: 0,
        color: "#33FF57",
        duration: 500,
      })
      .add({
        translateY: 40,
        color: "#00f",
        duration: 500,
      });
  }, [text]);

  return (
    <div>
      <style>
        {`
          #animateMe {
            color: #fff;
            font-weight: 800;
            font-size: 5vw;
            margin-top: 5rem;
            text-align: center;
            font-family: 'Khula', sans-serif;
            height: 100vh;
          }

          #animateMe span {
            display: inline-block;
          }

          .space {
            display: inline-block;
            width: 0.5em;
          }

          @media (min-width: 768px) {
            #animateMe {
              font-size: 4rem;
              margin-top: 5rem;
            }
          }

          @media (min-width: 1024px) {
            #animateMe {
              font-size: 5rem;
            }
          }
        `}
      </style>
      <div id="animateMe">{text}</div>
    </div>
  );
}
