// Layout

// Pages
import Abc from '~/pages/Abc';
import Home from '~/pages/Home';
// Public routes
const publicRoutes = [
  { path: '/', component: Home, layout: 'Null' },
  { path: '/abc', component: Abc, layout: 'Null' },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
