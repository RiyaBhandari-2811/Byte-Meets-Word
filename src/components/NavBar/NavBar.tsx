import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import './NavBar.scss';
import NavItems from '../navitems/NavItems';

interface NavBarProps {
  toggleTheme?: () => void;
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <AppBar className="nav-bar" position="static" elevation={0}>
      <Toolbar className="nav-bar__toolbar" disableGutters>
        <Stack className="nav-bar__toolbar__title" direction="row">
          <AdbIcon className="nav-bar__title-logo" />
          <Typography component="a" className="nav-bar__title-text">
            Riya's Blog
          </Typography>
        </Stack>
        <NavItems />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
