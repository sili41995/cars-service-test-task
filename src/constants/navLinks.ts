import { NavLinks } from 'types/types';
import PagePaths from './pagePaths';

const navLinks: NavLinks = [
  { href: PagePaths.homePath, title: 'Home' },
  { href: PagePaths.catalogPath, title: 'Catalog' },
  { href: PagePaths.favoritesPath, title: 'Favorites' },
];

export default navLinks;
