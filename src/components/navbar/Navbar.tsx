import './Navbar.scss';

import { ColorModeContext } from '../../App';
import IconButton from '@mui/material/IconButton';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <section className="header">
      <IconButton aria-label="dark mode" onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <WbSunnyIcon /> : <NightsStayIcon />}
      </IconButton>
    </section>
  );
};

export default Navbar;
