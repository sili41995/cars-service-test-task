import { List, ListItem, NavContainer } from './NavigationBar.styled';
import { NavLink } from 'react-router-dom';
import { IProps } from './NavigationBar.types';
import { FC } from 'react';

const NavigationBar: FC<IProps> = ({ navLinks }) => (
  <NavContainer>
    <List>
      {navLinks.map(({ href, title }) => (
        <ListItem key={href}>
          <NavLink to={href}>{title}</NavLink>
        </ListItem>
      ))}
    </List>
  </NavContainer>
);

export default NavigationBar;
