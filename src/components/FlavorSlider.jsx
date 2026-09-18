import { useGSAP } from "@gsap/react";
import { flavorless } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    // Completely disable GSAP scroll animations on mobile
    if (isMobile) return;

    const scrollAmount = sliderRef.current ? sliderRef.current.scrollWidth - window.innerWidth : 0;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  }, [isMobile, isTablet]);

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {["coffe-slider-1.png", "coffe-slider-2.png", "coffe-slider-3.png", "coffe-slider-4.png"].map(
          (image, index) => {
            const flavor = flavorless[index] || { name: `Flavor ${index + 1}` };
            const cardGradients = [
              "from-[#523122]/95 via-[#3a2014]/95 to-[#22130c]/95 border-[#c88e64]/40",
              "from-[#7f3b2d]/95 via-[#5c271c]/95 to-[#3b1710]/95 border-[#e3a458]/40",
              "from-[#4a3525]/95 via-[#322317]/95 to-[#1e140d]/95 border-[#faeade]/30",
              "from-[#a26833]/95 via-[#70441e]/95 to-[#42260f]/95 border-[#fed775]/40",
            ];
            const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-3"];

            return isMobile ? (
              /* =========================
                 3D CARD (MOBILE VIEW ONLY)
              ========================== */
              <div
                key={image}
                className="flavor-card-container relative z-30 w-full max-w-[320px] sm:max-w-[360px] flex-none px-4 py-5"
              >
                <div
                  className={`relative w-full h-[400px] rounded-3xl p-6 flex flex-col justify-between items-center overflow-hidden
                    bg-gradient-to-b ${cardGradients[index % cardGradients.length]}
                    border-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
                    transform ${rotations[index % rotations.length]}
                    backdrop-blur-md`}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Subtle 3D reflective highlight */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Flavor title & badge on card */}
                  <div className="w-full flex justify-between items-start z-10">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#faeade]/70 font-semibold px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#faeade] px-3 py-1 rounded-full bg-[#faeade]/15 border border-[#faeade]/20">
                      Signature
                    </span>
                  </div>

                  {/* Bottle / Drink graphic with 3D elevation */}
                  <div className="relative w-full flex-1 flex items-center justify-center my-2 z-10 pointer-events-none select-none">
                    <img
                      src={`/${image}`}
                      alt={flavor.name}
                      className="max-h-[260px] object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Card bottom footer */}
                  <div className="w-full text-center z-10 pt-2 border-t border-white/10">
                    <h3 className="text-xl font-bold uppercase text-[#faeade] tracking-wide">
                      {flavor.name}
                    </h3>
                    <p className="text-xs text-[#faeade]/75 mt-0.5 font-paragraph">
                      Crafted with premium roasted beans
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* =========================
                 STANDARD SLIDER (DESKTOP & TABLET)
              ========================== */
              <div
                key={image}
                className={`relative z-30 lg:w-[50vw] md:w-[90vw] lg:h-[70vh] md:h-[50vh] flex-none ${
                  flavorless[index]?.rotation || ""
                }`}
              >
                <img
                  src={`/${image}`}
                  alt={`Coffee slider ${index + 1}`}
                  className="drinks"
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default FlavorSlider;
