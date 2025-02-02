import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import './NavBar.scss';
import NavItems from '../navitems/NavItems';
import GradientText from '../gradienttext/GradientText';

interface INavBarProps {
  toggleTheme?: () => void;
}

const NavBar: React.FC<INavBarProps> = () => {
  return (
    <AppBar className="nav-bar" position="static" elevation={0}>
      <Toolbar className="nav-bar__toolbar" disableGutters>
        <Stack
          className="nav-bar__toolbar__title"
          direction="row"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <AdbIcon
            className="nav-bar__title-logo"
            sx={{
              width: {
                xs: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.5rem',
                xl: '3rem',
              },
            }}
          />
          <Typography
            component="a"
            className="nav-bar__title-text"
            sx={{
              fontSize: {
                xs: '0.7rem',
                sm: '1rem',
                md: '1rem',
                lg: '1.2rem',
                xl: '1.5rem',
              },
            }}
          >
            <GradientText text={"Riya's Blog"} />
          </Typography>
        </Stack>
        <NavItems />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
