import './Home.scss';

import { Canvas } from '@react-three/fiber';
import DescriptionIcon from '@mui/icons-material/Description';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Loader from '../../components/loader/Loader';
import { OrbitControls } from '@react-three/drei';
import SpaceMan from '../../models/spaceman/SpaceMan';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Suspense } from 'react';
import { useTheme } from '@mui/material/styles';

const actions = [
  { icon: <DescriptionIcon />, name: 'Resume', href: "https://thamjiththaha.com/resume/thamjiththaha.pdf" },
  { icon: <LinkedInIcon />, name: 'LinkedIn', href: "https://www.linkedin.com/in/thamjith-thaha/" },
  { icon: <InstagramIcon />, name: 'Instagram', href: "https://www.instagram.com/thamjith.thaha/" }
];

const Home = () => {
  const theme = useTheme();

  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };
  
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
      <SpeedDial
        ariaLabel="Shortcut"
        sx={{ 
          position: 'absolute', 
          bottom: 16, 
          right: 16,
          '& .MuiSpeedDial-fab': {
            bgcolor: theme.palette.mode === 'dark' ? 'white' : 'black', 
          },
          '& .MuiSpeedDial-fab:hover': {
            bgcolor: theme.palette.mode === 'dark' ? 'white' : 'black', 
          },
        }}
        icon={<SpeedDialIcon />}
        className='home__speedial'
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.href)}
          />
        ))}
      </SpeedDial>
    </section>
  );
};

export default Home;
