import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  const vdRef = useRef([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        isTablet: "(min-width: 769px) and (max-width: 1024px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isDesktop, isTablet } = context.conditions;

        gsap.set(".testimonials-section", {
          marginTop: isDesktop ? "-140vh" : isTablet ? "-80vh" : "0",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top bottom",
            end: isDesktop ? "200% top" : "bottom top",
            scrub: true,
          },
        });

        tl.to(".testimonials-section .first-title", {
          xPercent: isDesktop ? 60 : isTablet ? 35 : 15,
        }).to(
          ".testimonials-section .sec-title",
          {
            xPercent: isDesktop ? 25 : isTablet ? 15 : 8,
          },
          "<"
        );

        if (isDesktop || isTablet) {
          const pinTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".testimonials-section",
              start: "10% top",
              end: "200% top",
              scrub: 1.5,
              pin: true,
            },
          });

          pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut",
          });
        }
      }
    );
  });

  const handleTogglePlay = (index) => {
    const video = vdRef.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    if (video) video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    if (video) video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="w-full flex flex-col items-center pt-10 sm:pt-14 md:pt-[5vw] pointer-events-none select-none z-10">
        <h1 className="text-black first-title">Try Our Best</h1>
        <h1 className="text-light-brown sec-title">Coffee</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card cursor-pointer ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
            onClick={() => handleTogglePlay(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              autoPlay
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;