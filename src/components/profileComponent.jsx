import React, { useState, useEffect } from "react";
import "../styles/ProfileComponent.css";
import { words } from "@/data/information";

export function ProfileComponent() {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);

      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset = -80; // Margen superior
      const targetPosition =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duración en milisegundos
      let startTime = null;

      const easeInOutCubic = (time, start, distance, duration) => {
        time /= duration / 2;
        if (time < 1) return (distance / 2) * time * time * time + start;
        time -= 2;
        return (distance / 2) * (time * time * time + 2) + start;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = './Aleff-Espinosa-Cordova-CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="profile-section min-100vh flex flex-col justify-center items-center bg-gray-100">
      <div className="profile-container text-center px-2">
        <img
          src="./profilePic.jpeg"
          alt="Foto de perfil"
          className="profile-image w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full "
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
          ¡Hola! Soy Aleff.
        </h2>
        <div className="w-full h-12 flex justify-center items-center">
          <h2
            id="typewriter"
            className="text-lg sm:text-xl md:text-2xl font-semibold my-4"
          >
            {text}
          </h2>
        </div>
        <p className="text-md sm:text-base md:text-md lg:text-md xl:text-xl lg:max-w-[750px] font-medium">
          Ingeniero de software con más de 2 años de trayectoria en el desarrollo web.
          Me especializo en crear experiencias únicas y soluciones personalizadas.
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={scrollToContact}
            className="connect-button text-white px-4 py-2 rounded text-md transition"
          >
            Contáctame
          </button>
          <button
            onClick={handleDownloadCV}
            className="download-button text-white px-4 py-2 rounded text-md transition ml-2"
          >
            Descarga mi CV
          </button>
        </div>

        <div
          className={`scroll-down-container ${
            scrollY > 10 ? "hidden" : ""
          } mt-4`}
        >
          <p className="text-sm">Deslizar</p>
          <div className="mouse-icon mt-2">
            <div className="mouse-wheel w-4 h-8 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
