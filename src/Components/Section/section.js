import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import blackabtract from '~/Assets/black-abtract.jpeg';

const cx = classNames.bind(styles);

function section() {
    return (
        <div
            style={{
                backgroundImage: `url('${blackabtract}')`,
            }}
            className={cx('wrapper')}
        >
            <div className={cx('child')}>
                <h1>Aligned interests</h1>
                <p>
                    Because our investors are our owners, our interests are uniquely aligned, allowing us to focus on
                    you and your goals.
                </p>
            </div>
            <div className={cx('child')}>
                <h1>Greater conviction</h1>
                <p>
                    Because our investors are our owners, we act with conviction on the investment themes that are
                    important to you.
                </p>
            </div>
            <div className={cx('child')}>
                <h1>Long-term perspective</h1>
                <p>
                    Because our investors are our owners, we can focus on the long term rather than quarterly results.
                </p>
            </div>
            <div style={{ paddingBottom: '5rem' }} className={cx('child')}>
                <h1>Low costs</h1>
                <p>
                    Because our investors are our owners, it enables us to consistently pass along economies of scale
                    and lower the cost of investing, so you keep more of your returns.
                </p>
            </div>
        </div>
    );
}

export default section;
