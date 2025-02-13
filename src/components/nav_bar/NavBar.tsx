import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import './NavBar.scss';
import NavItems from '../navitems/NavItems';
import GradientText from '../gradient_text/GradientText';
import GradientIcon from '../gradient_icon/GradientIcon';

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
          <GradientIcon Icon={AdbIcon} gradientId={'logo'} />
          <Typography
            component="a"
            className="nav-bar__title-text"
            sx={{
              fontSize: {
                xs: '0.9rem',
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
