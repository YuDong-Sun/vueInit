const layout = () => import('@/views/layout'),
  home = () => import('@/views/home');

const route = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: home
      }
    ]
  }
];

export default route;
