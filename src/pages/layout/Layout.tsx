import Footer from '@/components/footer/Footer';
import NavBar from '@components/nav_bar/NavBar';
import generateTheme from '@/utils/theme';
import { Box, Container, Stack, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Newsletter from '@components/newsletter/Newsletter';
import ScrollToTop from '@/utils/ScrollToTop';
import { useEffect } from 'react';

const Layout: React.FC = () => {
  console.log(import.meta.env);
  console.log(import.meta.env.VITE_API_BASE_URL + '/api/users');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array runs this only once on mount
  return (
    <ThemeProvider theme={generateTheme()}>
      <ScrollToTop />
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
