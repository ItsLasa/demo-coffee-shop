import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const MessageSection = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        // Skip complex SplitText animations on mobile — they break due to
        // word wrapping at small viewports; simple fade-in is used instead.
        if (isMobile) {
            gsap.to(".message-content .msg-wrapper h1", {
                color: "#faeade",
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".message-content",
                    start: "top 80%",
                },
            });
            gsap.to(".msg-text-scroll", {
                duration: 0.8,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.inOut",
                scrollTrigger: {
                    trigger: ".msg-text-scroll",
                    start: "top 90%",
                },
            });
            return;
        }

        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });
        const secMsgSplit = SplitText.create(".second-message", {
            type: "words",
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "words, lines",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
            },
        });
        gsap.to(secMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 120%",
            },
        });
        revealTl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            },
        });
        paragraphTl.from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
        });
    }, [isMobile]);

    return (
        <section id="about" className="message-content">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">Awaken your senses And</h1>
                             <h1 className="first-message"> </h1>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="msg-text-scroll"
                        >
                            <div className="bg-light-brown  md:pb-5 pb-3 px-5">
                                <h2 className="text-red-brown">Fuel Up</h2>
                            </div>
                        </div>

                        <h1 className="second-message">
                            your day
                            with every sip of
                            Perfectly Brewed Coffee
                        </h1>
                    </div>

                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 text-2xl flex-center overflow-hidden">
                            <span className=" text-center">
                                Wake up your spirit and fuel your day with every sip bold coffee, good energy, and unforgettable moments.

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageSection;