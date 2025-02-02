import routes, { RouteType } from '@/routing/routes';
import navigateToRoute, { NavigateFunction } from '@/utils/navigateTo';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import './NavItems.scss';
import { useLocation } from 'react-router';

const NavItems: React.FC = () => {
  const routeTo: NavigateFunction = navigateToRoute();
  const location = useLocation();
  return (
    <List className="nav-items" disablePadding>
      {routes.map(
        ({ path, name, hidden }: RouteType) =>
          !hidden && (
            <ListItem key={name} disablePadding>
              <ListItemButton
                disableGutters
                className="nav-items__button"
                onClick={() => routeTo(path)}
                sx={{ padding: '0px' }}
              >
                <ListItemText
                  primary={name}
                  className={`nav-items__button-text ${
                    location.pathname === path ? 'nav-items--active' : ''
                  }`}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: {
                          xs: '0.7rem',
                          sm: '1rem',
                          md: '1rem',
                          lg: '1rem',
                          xl: '1.5rem',
                        },
                        margin: { md: '0.5rem', lg: '1rem', xl: '1rem' },
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
      )}
    </List>
  );
};

export default NavItems;
