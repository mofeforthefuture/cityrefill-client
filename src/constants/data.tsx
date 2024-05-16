import { Home, Cog } from 'lucide-react';

export const sideBarArr = [
  {
    icon: (active: boolean) => (
      <Home color={active ? 'rgb(30 58 138)' : 'white'} strokeWidth={1.25} />
    ),
    text: 'Dashboard',
    to: '/',
  },
  {
    icon: (active: boolean) => (
      <Cog color={active ? 'rgb(30 58 138)' : 'white'} strokeWidth={1.25} />
    ),
    text: 'Settings',
    to: '/settings',
  },
];

<Cog color='#f7e8e8' strokeWidth={1.25} />;
