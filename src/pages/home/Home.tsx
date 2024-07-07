import './Home.scss';

import { Canvas } from '@react-three/fiber';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Loader from '../../components/loader/Loader';
import { OrbitControls } from '@react-three/drei';
import SpaceMan from '../../models/spaceman/SpaceMan';
import { Suspense } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import DarkModeSwitcher from '../../components/darkModeSwitcher/DarkModeSwitcher';
import Stars from '../../models/stars/Stars';

const links = [
  {
    id: 0,
    icon: <DescriptionIcon fontSize="large" />,
    name: 'Resume',
    href: 'https://thamjiththaha.com/resume/thamjiththaha.pdf',
  },
  {
    id: 1,
    icon: <LinkedInIcon fontSize="large" />,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thamjith-thaha/',
  },
  {
    id: 2,
    icon: <GitHubIcon fontSize="large" />,
    name: 'Github',
    href: 'https://github.com/Thamjith',
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Grid container style={{ height: '100vh' }} sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}>
        <DarkModeSwitcher />
      </Box>
      {/* Left Bar - 30% */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          minHeight: '100vh',
          bgcolor: theme.palette.mode !== 'dark' ? 'white' : 'black',
          color: theme.palette.mode !== 'dark' ? 'black' : 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
          <Typography variant="h1" component="h2">
            Hi,
          </Typography>
          <Typography variant="h5" component="h2">
            My name is Thamjith Thaha.
          </Typography>
          <Typography variant="h5" component="h2">
            I'm a full stack software engineer
          </Typography>
          {/* Icons for LinkedIn, GitHub, and Resume */}
          <Box
            sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}
          >
            {links.map((ele) => (
              <IconButton
                key={ele.id}
                component="a"
                href={ele.href}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn"
              >
                {ele.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Grid>

      {/* Right Side - 70% */}
      <Grid item xs={12} md={8} sx={{ position: 'relative' }}>
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
            <Stars />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              touches={{
                ONE: 1, // 1: rotate
                TWO: 2, // 2: pan (or zoom if you need)
              }}
            />
          </Suspense>
        </Canvas>
      </Grid>
    </Grid>
  );
};

export default Home;
