import { memo, type FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = (props) => {
  return (
    <section id="hero">
      <div>
        <h1>Hero</h1>
        <img src="/title.png"  alt = "Macbook title"/>
      </div>

      <video src="/videos/hero.mp4" autoPlay muted/>
      <button>BUY</button>
      <p>From $1599 for 12 months</p>
    </section>
  );
};

export default memo(Hero);
