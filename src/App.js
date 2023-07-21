// import logo from './logo.svg';
// import './App.css';

import classNames from 'classnames/bind';
import styles from './app.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/Routes';
import { DefaultLayout } from './Components/Layout';

const cx = classNames.bind(styles);

function App() {
    return (
        <Router>
            <div className={cx('App')}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
