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
    <List className="nav-items">
      {routes.map(
        ({ path, name, hidden }: RouteType) =>
          !hidden && (
            <ListItem key={name} disablePadding>
              <ListItemButton
                className="nav-items__button"
                onClick={() => routeTo(path)}
              >
                <ListItemText
                  primary={name}
                  className={`nav-items__text ${
                    location.pathname === path ? 'nav-items--active' : ''
                  }`}
                />
              </ListItemButton>
            </ListItem>
          )
      )}
    </List>
  );
};

export default NavItems;
