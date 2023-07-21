import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function EricVuong() {
    return (
        <iframe
            title="iframe"
            className={cx('iframe')}
            src="https://lookerstudio.google.com/embed/reporting/23c53c67-7697-4087-9733-16430bc424d6/page/p_hsprbj317c"
            allowfullscreen
        ></iframe>
    );
}

export default EricVuong;
