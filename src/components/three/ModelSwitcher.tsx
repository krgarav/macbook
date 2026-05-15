import { PresentationControls } from "@react-three/drei";
import { memo, useRef, type FC } from "react";
import MacbookModel16 from "../models/Macbook-16";

interface ModelSwitcherProps {}

const ModelSwitcher: FC<ModelSwitcherProps> = ({ scale, isMobile }) => {
  const smallMacbookRef = useRef("");
  const largeMacbookRef = useRef("");
  const showLargeMacbook = scale === 0.08 || scale === 0.05;
  const controlConfig = {
    snap :true,
    speed : 1,
    zoom : 1,
    azimuth : [-Infinity , Infinity],
    config : {mass : 1, tension: 0,friction : 26}
  }
  return (
    <>
      <PresentationControls {...controlConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      {/* <PresentationControls {...controlConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls> */}
    </>
  );
};

export default memo(ModelSwitcher);
