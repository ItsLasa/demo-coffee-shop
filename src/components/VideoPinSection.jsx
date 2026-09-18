import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className='vd-pin-section'>
      <div
        style={{ clipPath: isMobile ? "circle(100% at 50% 50%)" : "circle(6% at 50% 50%)"}}
        className='size-full video-box'
      >
        <video
          ref={videoRef}
          src='/videos/pin-video.mp4'
          playsInline
          muted
          loop
          autoPlay
        />

        <div className='abs-center cursor-pointer select-none' onClick={togglePlay}>
          <div className='play-btn group'>
            <img
              src='/images/play.svg'
              alt={isPlaying ? 'Pause' : 'Play'}
              className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ml-1 transition-transform duration-300 group-hover:scale-110'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
