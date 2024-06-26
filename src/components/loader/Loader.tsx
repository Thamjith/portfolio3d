import './Loader.scss';

import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className="loader__wrapper">
        <div className="loader__spinner"></div>
      </div>
    </Html>
  );
};

export default Loader;
