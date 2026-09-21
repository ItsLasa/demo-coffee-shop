import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.Out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="home" className='bg-main-bg'>
      <div className='hero-container'>
        {isTablet ? (
          <>
            <img
              src='/images/hero-bg.png'
              className='absolute inset-0 size-full object-cover'
            />
            <img
              src='/images/hero-img.png'
              className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto'
            />
          </>
        ) : (
          <video
            src='/videos/hero-bg.mp4'
            autoPlay
            muted
            playsInline
            className='absolute inset-0 w-full h-full object-cover'
          />
        )}
        <div className='hero-content opacity-0'>

          <div className='overflow-hidden'>

            <h1 className='hero-title '>Brewed to Perfection</h1>
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className='hero-text-scroll'
          >

            <div className='hero-subtitle'>

              <h1>Freshly Roasted • Richly Brewed</h1>
            </div>
          </div>
          <div className="hidden md:block bg-[#FFF4E8]/1 backdrop-blur-md px-5 py-4 shadow-sm">
            <h3 className="text-[#0e0e0e] text-center text-sm md:text-lg leading-relaxed font-medium">
              Slow down, take a sip, and enjoy the little moments. Discover handcrafted
              coffee made from carefully selected beans, roasted for rich aroma, smooth
              flavor, and an unforgettable taste.
            </h3>
          </div>

          <div className='hero-button'>
            <a href='#flavor-section' aria-label='Explore Our Coffee Menu'>Explore Our Coffee</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
