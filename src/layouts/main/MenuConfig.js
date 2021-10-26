import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import register from '@iconify/icons-eva/power-outline';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
import bulbFill from '@iconify/icons-eva/bulb-outline';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Latest News',
    path: '/Latest',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />
  },
  {
    title: 'Advertise',
    path: '/advertise',
    icon: <Icon icon={bulbFill} {...ICON_SIZE} />
  },
  { title: 'Contact Us', path: PATH_DASHBOARD.root, icon: <Icon icon={roundGrain} {...ICON_SIZE} /> },
  {
    title: 'Sign Up',
    path: '/register',
    icon: <Icon icon={register} {...ICON_SIZE} />
  }
];

export default menuConfig;
