import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [lists, setLists] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section flex flex-col justify-between">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover select-none pointer-events-none"
      />

      <div className="relative z-10 flex flex-col justify-between flex-1 px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 pb-8 md:pb-16 max-w-7xl mx-auto w-full">
        {/* Top Title & Subtitle row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <div className="overflow-hidden">
              <h1 className="nutrition-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#513022] leading-none">
                It still does
              </h1>
            </div>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll rotate-[-3deg] border-2 sm:border-4 md:border-[.5vw] border-[#e3d3bc]"
            >
              <div className="bg-[#a26833] py-2 px-4 sm:py-3 sm:px-6 md:px-8">
                <h2 className="text-[#e3d3bc] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-none">
                  Body Good
                </h2>
              </div>
            </div>
          </div>

          <div className="max-w-xs sm:max-w-sm md:max-w-md">
            <p className="text-sm sm:text-base md:text-lg text-[#513022]/90 font-paragraph leading-relaxed">
              Carefully roasted coffee beans packed with natural antioxidants, essential minerals, and clean energy to revitalize your day.
            </p>
          </div>
        </div>

        {/* Center image container for clean mobile & desktop scaling */}
        <div className="relative my-6 sm:my-8 md:my-10 flex justify-center items-center h-48 sm:h-64 md:h-80 lg:h-96 w-full">
          <img
            src="/images/big-img.png"
            alt="Coffee Nutrition"
            className="max-h-full max-w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Nutrition stats box */}
        <div className="w-full">
          <div className="bg-[#fdebd2]/90 backdrop-blur-sm rounded-2xl md:rounded-full border-2 sm:border-4 md:border-[.4vw] border-[#e8ddca] p-4 sm:p-6 md:py-6 md:px-8 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between items-center gap-4 sm:gap-6">
              {lists.map((nutrient, index) => (
                <div
                  key={index}
                  className="relative flex-1 flex flex-col items-center text-center px-2"
                >
                  <p className="text-xs sm:text-sm md:text-base font-paragraph font-medium text-[#865720]">
                    {nutrient.label}
                  </p>
                  <p className="font-paragraph text-[10px] sm:text-xs text-[#865720]/70 mt-1">
                    up to
                  </p>
                  <p className="text-xl sm:text-2xl md:text-4xl tracking-tight font-bold text-[#513022] mt-0.5">
                    {nutrient.amount}
                  </p>

                  {index !== lists.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-[#C89C6E]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;