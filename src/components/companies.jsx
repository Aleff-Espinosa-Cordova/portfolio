import { companies } from "../data/information";
import { useEffect, useRef, useState } from "react";

export function Companies() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const scrollSpeed = 1; // Velocidad de desplazamiento
    const scrollDelay = 20;

    const autoScroll = () => {
      if (!isHovered && scrollElement) {
        scrollElement.scrollLeft += scrollSpeed;
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="w-full pt-12 lg:py-20 flex justify-center items-center">
      <div className="container flex flex-col items-center gap-8">
        <div className="grid gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            Compañías con las que he colaborado
          </h2>
          <p className="lg:max-w-[750px] p-2 text-xl text-muted-foreground text-center">
            Ha sido un honor contribuir al crecimiento de estas destacadas empresas mediante la aportación de soluciones y la generación de valor en cada proyecto.
          </p>
        </div>
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          ref={scrollRef}
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            width: "98.6vw",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex py-6 gap-6 px-4 md:gap-8 md:px-6 w-full">
            {[...companies, ...companies, ...companies, ...companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative py-4 px-8 h-32 w-64 overflow-hidden rounded-lg bg-card/95 transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:rounded-lg flex justify-center items-center">
                    <img
                      src={company.imageUrl}
                      alt={`${company.name} Logo`}
                      className="object-contain h-full max-w-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-card/80 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:underline"
                      >
                        {company.name}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        {company.title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
