import Footer from '@/components/footer/Footer';
import NavBar from '@components/nav_bar/NavBar';
import generateTheme from '@/utils/theme';
import { Box, Container, Stack, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Newsletter from '@components/newsletter/Newsletter';

const Layout: React.FC = () => {
  return (
    <ThemeProvider theme={generateTheme()}>
      <Container
        sx={{
          paddingLeft: { lg: '1rem', xl: '0px', xxl: '0px' },
          // border: 3,
          // borderColor: {
          //   xs: 'red',
          //   sm: 'green',
          //   md: 'yellow',
          //   lg: 'blue',
          //   xl: 'orange',
          // },
        }}
      >
        <Stack className="layout">
          <NavBar />
          <Box component="main" className="layout__content">
            <Outlet />
          </Box>
          <Newsletter />
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
