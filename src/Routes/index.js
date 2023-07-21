import EricVuong from '~/Pages/EricVuong';
import LongPhan from '~/Pages/LongPhan';
import Home from '~/Pages/Home';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/EricVuong', component: EricVuong },
    { path: '/LongPhan', component: LongPhan },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
