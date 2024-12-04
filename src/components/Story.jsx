import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle.jsx";

const Story = () => {
    const frameRef = useRef(null);
    

  return (
    <section id="story" className="min-h-dvh w-screen text-blue-50 bg-black">
      <div className="flex size-full flex-col items-center pb-24"></div>
      <p className="font-general  uppercase md:text-[10px] pl-[45%] text-[30px]">
        The Multiversal World
      </p>

      <div className="relative size-full">
        <AnimatedTitle
          title="The st<b>o</b>ry of a <br/> hidden rela<b>m</b>"
          sectionId="#story"
          containerClass="mt-5 pointer-events-none mix-vlend-difference relative z-10"
        />

        <div className="story-img-container">
            <div className="story-img-mask">
            <div className="story-img-content
            ">
            <img src="/image/entrance.webp" alt="Entrance"
            className="object-contain"
            ref={frameRef} />
            </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
