import React from 'react';
import Header from './header';
import classNames from 'classnames/bind';
import Styles from './Styles.module.scss';

const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
