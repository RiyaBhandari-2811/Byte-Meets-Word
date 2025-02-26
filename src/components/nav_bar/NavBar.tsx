import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import './NavBar.scss';
import NavItems from '../navitems/NavItems';
import GradientText from '../gradient_text/GradientText';
import logo from '@assets/img/digital-transformation.png';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';

interface INavBarProps {
  toggleTheme?: () => void;
}

const NavBar: React.FC<INavBarProps> = () => {
  const routeTo: NavigateFunction = navigateToRoute();
  return (
    <AppBar className="nav-bar" position="static" elevation={0}>
      <Toolbar className="nav-bar-toolbar" disableGutters>
        <Stack
          className="nav-bar-toolbar-title"
          direction="row"
          justifyContent="center"
          alignItems="center"
          onClick={() => routeTo('/')}
        >
          <img src={logo} alt={'logo'} width={30} />
          <Typography
            component="a"
            className="nav-bar-title-text"
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
            <GradientText text="Riya's Blog" />
          </Typography>
        </Stack>
        <NavItems />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
