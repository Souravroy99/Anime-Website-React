import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
        <p className="font-general text-sm uppercase md:text-[13px]">
          Welcome to the world of STROY
        </p>

        <AnimatedTitle title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure" containerClass="mt-5 text-center !text-black"/>
        
        <div className="about-subtext">
          <p>The Fear of Fears begins your journey—your life becomes an epic</p>
          <p className="text-gray-500">
            The presence of STROY instills fear in all who encounter it
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;