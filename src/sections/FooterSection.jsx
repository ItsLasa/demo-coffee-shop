
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  return (
    <section className="footer-section relative overflow-hidden bg-[#1C120D] text-[#F5EBDD]">

      {/* =========================
          DECORATIVE TOP CURVE
      ========================== */}
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full h-auto object-cover -translate-y-px"
      />

      <div className="relative px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 pt-[8vh] sm:pt-[10vh] lg:pt-[12vh] xl:pt-[15vh] pb-6 sm:pb-8">

        {/* =========================
            BACKGROUND GLOW
        ========================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute
              top-[12%]
              left-1/2
              -translate-x-1/2
              w-[220px] h-[220px]
              sm:w-[320px] sm:h-[320px]
              md:w-[420px] md:h-[420px]
              lg:w-[500px] lg:h-[500px]
              xl:w-[600px] xl:h-[600px]
              rounded-full
              bg-[#8B5E3C]/20
              blur-[80px]
              sm:blur-[100px]
              lg:blur-[120px]
            "
          />
        </div>

        {/* =========================
            BIG BRAND STATEMENT
        ========================== */}
        <div className="relative z-10 text-center max-w-7xl mx-auto">

          <p
            className="
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.3em]
              lg:tracking-[0.4em]
              text-[10px]
              sm:text-xs
              md:text-sm
              lg:text-base
              xl:text-lg
              opacity-70
              mb-3
              sm:mb-4
              lg:mb-5
            "
          >
            Brew something unforgettable
          </p>

          <div className="overflow-hidden p-4">
            <h1
              className="
      general-title
      text-center
      text-[clamp(3rem,10vw,9rem)]
      leading-[1]
      sm:leading-[0.95]
      md:leading-[0.85]
    "
            >
              GOOD COFFEE
              <br />
              <span className="inline-block mt-4 sm:mt-0 font-light">
                GOOD MOOD
              </span>
            </h1>
          </div>

          <p
            className="
              max-w-[280px]
              sm:max-w-sm
              md:max-w-lg
              lg:max-w-xl
              xl:max-w-2xl
              mx-auto
              mt-5
              sm:mt-6
              lg:mt-8
              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              xl:text-xl
              2xl:text-2xl
              leading-relaxed
              opacity-80
            "
          >
            From the first aroma to the final sip, every cup is crafted
            to make your everyday moments a little better.
          </p>
        </div>

        {/* =========================
            COFFEE VISUAL
            Hidden on mobile
        ========================== */}
        {/* <div
          className="
            relative
            hidden
            md:flex
            w-full
            h-[280px]
            lg:h-[360px]
            xl:h-[440px]
            2xl:h-[520px]
            items-center
            justify-center
            mt-6
            lg:mt-10
          "
        >
          <video
            src="/videos/splash.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="
              absolute
              inset-0
              w-full
              h-full
              object-contain
              mix-blend-screen
            "
          />
        </div> */}

        {/* =========================
            SOCIAL
        ========================== */}
        <div
          className="
            relative
            z-10
            flex
            justify-center
            items-center
            gap-3
            sm:gap-4
            lg:gap-5
            mt-8
            md:mt-4
            lg:mt-8
          "
        >

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn group"
            aria-label="YouTube"
          >
            <img
              src="/images/yt.svg"
              alt="YouTube"
              className="
                w-5 h-5
                sm:w-6 sm:h-6
                lg:w-7 lg:h-7
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn group"
            aria-label="Instagram"
          >
            <img
              src="/images/insta.svg"
              alt="Instagram"
              className="
                w-5 h-5
                sm:w-6 sm:h-6
                lg:w-7 lg:h-7
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>

          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn group"
            aria-label="TikTok"
          >
            <img
              src="/images/tiktok.svg"
              alt="TikTok"
              className="
                w-5 h-5
                sm:w-6 sm:h-6
                lg:w-7 lg:h-7
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>

        </div>

        {/* =========================
            FOOTER CONTENT
        ========================== */}
        <div
          className="
            relative
            z-10
            mt-20
            sm:mt-24
            md:mt-28
            lg:mt-36
            xl:mt-40
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            sm:gap-12
            md:gap-14
            lg:gap-16
            xl:gap-20
            max-w-7xl
            mx-auto
          "
        >

          {/* =========================
              BRAND
          ========================== */}
          <div>
            <h3
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-bold
                tracking-tight
              "
            >
              Coffee<span className="italic">.</span>
            </h3>

            <p
              className="
                mt-3
                sm:mt-4
                max-w-xs
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                opacity-60
              "
            >
              Your daily ritual, brewed better.
              Fresh beans, bold flavors, unforgettable moments.
            </p>
          </div>

          {/* =========================
              NAVIGATION
          ========================== */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10">

            {/* Explore */}
            <div>
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.3em]
                  opacity-40
                  mb-4
                  sm:mb-5
                "
              >
                Explore
              </p>

              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base">

                <a
                  href="#home"
                  className="block hover:opacity-60 transition"
                >
                  Home
                </a>

                <a
                  href="#flavor-section"
                  className="block hover:opacity-60 transition"
                >
                  Our Menu
                </a>

                <a
                  href="#about"
                  className="block hover:opacity-60 transition"
                >
                  Our Story
                </a>

                <a
                  href="#locations"
                  className="block hover:opacity-60 transition"
                >
                  Locations
                </a>

              </div>
            </div>

            {/* Connect */}
            <div>
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.3em]
                  opacity-40
                  mb-4
                  sm:mb-5
                "
              >
                Connect
              </p>

              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-base">

                <a
                  href="#newsletter"
                  className="block hover:opacity-60 transition"
                >
                  Contact
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-60 transition"
                >
                  Instagram
                </a>

                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-60 transition"
                >
                  TikTok
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-60 transition"
                >
                  YouTube
                </a>

              </div>
            </div>

          </div>

          {/* =========================
              NEWSLETTER
          ========================== */}
          <div id="newsletter">

            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.3em]
                opacity-40
                mb-4
                sm:mb-5
              "
            >
              Stay in the loop
            </p>

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
                lg:text-lg
                xl:text-xl
                leading-relaxed
                opacity-75
                max-w-lg
              "
            >
              Get fresh updates, new menu drops, special events,
              and good coffee delivered straight to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.elements.email.value.trim();
                if (email) {
                  alert(`Thanks! You're subscribed with ${email}`);
                  e.target.reset();
                }
              }}
              className="
                flex
                items-center
                border-b
                border-[#F5EBDD]/30
                mt-6
                sm:mt-8
                pb-3
                sm:pb-4
              "
            >

              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="
                  w-full
                  min-w-0
                  bg-transparent
                  outline-none
                  placeholder:text-[#F5EBDD]/40
                  text-xs
                  sm:text-sm
                "
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="
                  ml-3
                  shrink-0
                  hover:translate-x-1
                  transition-transform
                "
              >
                <img
                  src="/images/arrow.svg"
                  alt="Subscribe"
                  className="w-4 h-4 sm:w-5 sm:h-5 invert"
                />
              </button>

            </form>
          </div>

        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div
          className="
            relative
            z-10
            mt-16
            sm:mt-20
            md:mt-24
            lg:mt-28
            pt-5
            sm:pt-6
            border-t
            border-[#F5EBDD]/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-start
            md:items-center
            gap-4
            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-base
            opacity-50
            max-w-7xl
            mx-auto
          "
        >

          <p>
            <span className="font-bold opacity-80">Biggy Coffee</span> &nbsp;·&nbsp; © 2026 Coffee. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6">

            <a
              href="/privacy-policy"
              className="hover:opacity-100 transition"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-of-service"
              className="hover:opacity-100 transition"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FooterSection;