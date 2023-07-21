import React from 'react';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import { Link } from 'react-router-dom';
import logo from '~/Assets/logo.png';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('logo')}>
                <Link to="/">
                    <img className={cx('logo')} src={logo} alt="logo" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
