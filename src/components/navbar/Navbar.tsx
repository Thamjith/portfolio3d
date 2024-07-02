import './Navbar.scss';

import { ColorModeContext } from '../../App';
import IconButton  from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import React from 'react';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <section className="header">
      <NavLink to="/" className='title'>
        <Typography variant="h6" gutterBottom>
          Thamjith Thaha
        </Typography>
      </NavLink>
      <IconButton aria-label="dark mode" onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <WbSunnyIcon /> : <NightsStayIcon />}
      </IconButton>
    </section>
  );
};

export default Navbar;
