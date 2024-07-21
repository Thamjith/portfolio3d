import { IconButton } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const DarkModeSwitcher = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton
      aria-label="dark mode"
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? <WbSunnyIcon /> : <NightsStayIcon />}
    </IconButton>
  );
};

export default DarkModeSwitcher;
