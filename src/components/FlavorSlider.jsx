import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { flavorless } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "coffe-slider-1.png",
  "coffe-slider-2.png",
  "coffe-slider-3.png",
  "coffe-slider-4.png",
];

const rotations = ["lg:-rotate-2", "lg:rotate-2", "lg:-rotate-1", "lg:rotate-3"];

const FlavorSlider = () => {
  const sliderRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop & laptop only
    mm.add("(min-width: 1024px)", () => {
      const scrollAmount = sliderRef.current
        ? sliderRef.current.scrollWidth - window.innerWidth
        : 0;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "2% top",
            end: `+=${scrollAmount + 1500}px`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
        .to(".flavor-section", {
          x: `-${scrollAmount + 1500}px`,
          ease: "power1.inOut",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "top top",
            end: "bottom 80%",
            scrub: true,
          },
        })
        .to(".first-text-split", { xPercent: -30, ease: "power1.inOut" })
        .to(".flavor-text-scroll", { xPercent: -22, ease: "power1.inOut" }, "<")
        .to(".second-text-split", { xPercent: -10, ease: "power1.inOut" }, "<");
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sliderRef} className="slider-wrapper w-full">
      <div
        className="flavors grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 py-10
                   lg:flex lg:flex-nowrap lg:w-max lg:gap-16 lg:px-10 lg:py-0"
      >
        {images.map((image, index) => {
          const flavor = flavorless?.[index] || { name: `Flavor ${index + 1}` };

          return (
            <div
              key={image}
              className={`relative z-30 w-full max-w-[340px] sm:max-w-none mx-auto
                          flex flex-col items-center justify-center
                          lg:mx-0 lg:flex-none lg:w-[48vw] xl:w-[45vw] lg:h-[80vh]
                          ${rotations[index % rotations.length]}`}
            >
              <div className="w-full h-[300px] sm:h-[340px] lg:h-full flex items-center justify-center pointer-events-none select-none">
                <img
                  src={`/${image}`}
                  alt={flavor.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
                />
              </div>

              <h3 className="mt-3 text-lg sm:text-xl lg:text-3xl font-bold uppercase text-[#faeade] tracking-wide text-center">
                {flavor.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlavorSlider;