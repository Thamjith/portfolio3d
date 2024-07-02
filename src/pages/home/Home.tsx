import './Home.scss';

import { Canvas } from '@react-three/fiber';
import Loader from '../../components/loader/Loader';
import { OrbitControls } from '@react-three/drei';
import SpaceMan from '../../models/spaceman/SpaceMan';
import { Suspense } from 'react';

const Home = () => {

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
          <SpaceMan />
          <OrbitControls enablePan={false} enableZoom={true} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
