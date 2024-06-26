import './Home.scss';

import { Canvas } from '@react-three/fiber';
import Island from '../../models/island/Island';
import Loader from '../../components/loader/Loader';
import { Suspense } from 'react';

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="home__container">
      <Canvas className="home__canvas" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
