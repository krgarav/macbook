import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, type FC } from "react";
import { useMediaQuery } from "react-responsive";

interface ShowcaseProps {}

const Showcase: FC<ShowcaseProps> = () => {
    const isTablet = useMediaQuery({query : '(max-width :1024px)'});
    useGSAP(()=>{
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger : "#showcase",
                    start : 'top top',
                    end : 'bottom top',
                    scrub : true,
                    pin : true
                }
            })
            timeline.to('.mask img',{
                transform : 'scale(1.1)'
            }).to('.content', {opacity :1 ,y:0, ease:'power1.in'})
        }
    },[isTablet])
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay loop playsInline muted />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-mt-5 y-5 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4- the next generation of m4 power
                </span>
                .M4 Powers
              </p>
              <p>
                Our most advanced series of chips ever built for a pro laptop.
                Each chip in the M5 family delivers phenomenal single- and
                multithreaded CPU performance and faster unified
              </p>
              <p>
                The SSD storage is up to twice as fast as before.13 And with
                powerful Neural Accelerators, you can fly through AI tasks at
                mind-bending speeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Showcase);
