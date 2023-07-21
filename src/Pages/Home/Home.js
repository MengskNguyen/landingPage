import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// import backgroundImg from '~/Assets/background.jpeg';
import Desc from '~/Components/Desc';
import Section from '~/Components/Section';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Desc />
            <Section />
        </div>
    );
};

export default Home;
