
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section relative overflow-hidden bg-[#1C120D] text-[#F5EBDD]">
      {/* Decorative top curve */}
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="relative min-h-screen px-5 md:px-10 pt-[10vh] md:pt-[15vh] pb-8">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#8B5E3C]/20 blur-[120px]" />
        </div>

        {/* =========================
            BIG BRAND STATEMENT
        ========================== */}
        <div className="relative z-10 text-center">

          <p className="uppercase tracking-[0.4em] text-sm md:text-4xl opacity-70 mb-5">
            Brew something unforgettable
          </p>

          <div className="overflow-hidden">
            <h1 className="general-title text-center">
              GOOD COFFEE
              <br />
              <span className=" font-light">
                GOOD MOOD
              </span>
            </h1>
          </div>

          <p className="max-w-xl mx-auto mt-6 text-sm md:text-2xl leading-relaxed opacity-80">
            From the first aroma to the final sip, every cup is crafted
            to make your everyday moments a little better.
          </p>
        </div>

        {/* =========================
            COFFEE VISUAL
        ========================== */}
        <div className="relative h-[280px] md:h-full flex justify-center items-center">

          {isMobile ? (
            <img
              src="/images/footer-drisnk.png"
              alt="Freshly brewed coffee"
              className="absolute inset-0 w-full h-full object-contain"
            />
          ) : (
            <video
              src="/videos/splash.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
            />
          )}

          {/* Floating label */}
          {/* <div className="absolute bottom-5 left-5 md:left-20 rotate-[-6deg]">
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Roasted with passion
            </p>
          </div> */}

          {/* <div className="absolute top-10 right-5 md:right-20 rotate-[6deg]">
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Brewed with soul
            </p>
          </div> */}
        </div>

        {/* =========================
            SOCIAL
        ========================== */}
        <div className="relative z-10 flex justify-center gap-4 mt-5">

          <a
            href="#"
            className="social-btn group"
            aria-label="YouTube"
          >
            <img
              src="/images/yt.svg"
              alt="YouTube"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="#"
            className="social-btn group"
            aria-label="Instagram"
          >
            <img
              src="/images/insta.svg"
              alt="Instagram"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="#"
            className="social-btn group"
            aria-label="TikTok"
          >
            <img
              src="/images/tiktok.svg"
              alt="TikTok"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

        </div>

        {/* =========================
            FOOTER CONTENT
        ========================== */}
        <div className="relative z-10 mt-28 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">

          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Coffe<span className="italic">.</span>
            </h3>

            <p className="mt-4 max-w-xs text-lg leading-relaxed opacity-60">
              Your daily ritual, brewed better.
              Fresh beans, bold flavors, unforgettable moments.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10">

            <div>
              <p className="text-lg uppercase tracking-[0.3em] opacity-40 mb-5">
                Explore
              </p>

              <div className="space-y-3 text-sm md:text-base">
                <a href="#home" className="block hover:opacity-60 transition">
                  Home
                </a>

                <a href="#menu" className="block hover:opacity-60 transition">
                  Our Menu
                </a>

                <a href="#about" className="block hover:opacity-60 transition">
                  Our Story
                </a>

                <a href="#locations" className="block hover:opacity-60 transition">
                  Locations
                </a>
              </div>
            </div>

            <div>
              <p className="text-lg uppercase tracking-[0.3em] opacity-40 mb-5">
                Connect
              </p>

              <div className="space-y-3 text-sm md:text-base">
                <a href="#contact" className="block hover:opacity-60 transition">
                  Contact
                </a>

                <a href="#instagram" className="block hover:opacity-60 transition">
                  Instagram
                </a>

                <a href="#tiktok" className="block hover:opacity-60 transition">
                  TikTok
                </a>

                <a href="#youtube" className="block hover:opacity-60 transition">
                  YouTube
                </a>
              </div>
            </div>

          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-5">
              Stay in the loop
            </p>

            <p className="text-sm md:text-xl ading-relaxed opacity-75">
              Get fresh updates, new menu drops, special events,
              and good coffee delivered straight to your inbox.
            </p>

            <div className="flex items-center border-b border-[#F5EBDD]/30 mt-8 pb-4">

              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent outline-none placeholder:text-[#F5EBDD]/40 text-sm"
              />

              <button
                type="submit"
                className="ml-3 hover:translate-x-1 transition-transform"
              >
                <img
                  src="/images/arrow.svg"
                  alt="Subscribe"
                  className="w-5 invert"
                />
              </button>

            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="relative z-10 mt-20 md:mt-28 pt-6 border-t border-[#F5EBDD]/10 flex flex-col md:flex-row justify-between gap-4 text-lg opacity-50">

          <p>
            © 2026 Coffe. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:opacity-100 transition">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:opacity-100 transition">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FooterSection;
