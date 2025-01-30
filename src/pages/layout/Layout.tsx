import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';
import generateTheme from '@/utils/theme';
import { Box, Container, Stack, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme: () => void = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={generateTheme()}>
      <Container>
        <Stack className="layout">
          <NavBar toggleTheme={toggleTheme} />
          <Box component="main" className="layout__content">
            <Outlet />
          </Box>
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
