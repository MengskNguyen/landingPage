import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function LongPhan() {
    return (
        <iframe
            title="iframe"
            className={cx('iframe')}
            src="https://lookerstudio.google.com/embed/reporting/ec77633a-630c-456d-98ac-a153b7253524/page/kMwTD"
            allowfullscreen
        ></iframe>
    );
}

export default LongPhan;
