import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function EricVuong() {
    return (
        <iframe
            title="iframe"
            className={cx('iframe')}
            src="https://lookerstudio.google.com/embed/u/0/reporting/23c53c67-7697-4087-9733-16430bc424d6/page/p_kdnf9oz17c"
            allowfullscreen
        ></iframe>
    );
}

export default EricVuong;
