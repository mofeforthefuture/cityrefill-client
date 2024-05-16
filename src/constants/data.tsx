import { Home, Cog, Truck, ShoppingCart, List, ListTodo } from 'lucide-react';

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
      <ListTodo
        color={active ? 'rgb(30 58 138)' : 'white'}
        strokeWidth={1.25}
      />
    ),
    text: 'Inventory',
    to: '/inventory',
  },
  {
    icon: (active: boolean) => (
      <ShoppingCart
        color={active ? 'rgb(30 58 138)' : 'white'}
        strokeWidth={1.25}
      />
    ),
    text: 'Shop',
    to: '/shop',
  },
  {
    icon: (active: boolean) => (
      <Truck color={active ? 'rgb(30 58 138)' : 'white'} strokeWidth={1.25} />
    ),
    text: 'Deliveries',
    to: '/deliveries',
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
