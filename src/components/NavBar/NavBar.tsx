import { Button } from '@mui/material';
import './NavBar.scss';

interface NavBarProps {
  toggleTheme: () => void;
}

const NavBar = ({ toggleTheme }: NavBarProps) => {
  return (
    <div>
      <Button color="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default NavBar;
