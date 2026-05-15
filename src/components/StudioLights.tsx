import { Environment, Lightformer } from '@react-three/drei';
import { memo } from 'react';

const StudioLights = () => {
  return (
    <group name='lights'>
      <Environment resolution={256}>
            <group>
                <Lightformer form="rect" intensity={10} scale={10} position={[-10,5,-5]} rotation-y={Math.PI/2}/>
                  <Lightformer form="rect" intensity={10} scale={10} position={[10,5,-5]}/>
            </group>
      </Environment>
      <spotLight
      position={[-2,10,5]}
      angle={0.15}
      decay={0}
      intensity={Math.PI * 0.2}
      />
      <spotLight
      position={[-2,10,5]}
      angle={0.15}
      decay={0}
      intensity={Math.PI * 0.2}
      />
      <spotLight
      position={[-2,10,5]}
      angle={0.15}
      decay={0}
      intensity={Math.PI * 0.3}
      />
    </group>
  );
};

export default memo(StudioLights);