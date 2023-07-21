import React, { useState, useEffect } from 'react';
import Styles from './styles.module.scss';
import classNames from 'classnames/bind';
import backgroundimg from '~/Assets/header-background.jpeg';
import data from '~/accounts.JSON';
import { useNavigate } from 'react-router-dom';
// import Login from '../Login';

const cx = classNames.bind(Styles);

function Desc() {
    const [modal, setModal] = useState(false);
    const [userName, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState([]);
    const [loginStatus, setLoginStatus] = useState(false);
    const [isUser, setUser] = useState(false);

    const handleSetUsername = (event) => {
        setUsername(event.target.value);
        setLoginStatus(false);
    };

    const handleSetPassword = (event) => {
        setPass(event.target.value);
        setLoginStatus(false);
    };

    const toggleModel = () => {
        setModal(!modal);
    };

    useEffect(() => {
        // Load account
        fetch(data)
            .then((response) => response.json())
            .then((json) => setLogin(json));
    }, []);

    const nav = useNavigate();
    useEffect(() => {
        nav('/' + userName);
    }, [isUser]);

    const handleLogin = () => {
        if (userName !== '' && pass !== '') {
            for (const element of login) {
                if (element.username === userName && element.password === pass) {
                    setUser(true);
                }
            }
        } else {
            setLoginStatus(true);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url('${backgroundimg}')`,
            }}
            className={cx('wrapper')}
        >
            <div className={cx('text-container')}>
                <h1>At AI Finance, you're more than just an investor, you're an owner.</h1>
                <p>
                    AI Finance isn't owned by public shareholders. It's owned by the people who invest their trust on
                    us.*
                </p>
                <p>
                    Our owners have access to personalized financial advice, high-quality investments, and relevant
                    market insights that help you build a future for those you love.
                </p>

                <button className={cx('view-btn')} onClick={toggleModel}>
                    View report
                </button>
            </div>
            {modal && (
                <div className={cx('modal')}>
                    <div className={cx('overlay')}></div>
                    <div className={cx('modal-content')}>
                        <h4>Login</h4>
                        <div className={cx('row')}>
                            <input placeholder="Username" onChange={handleSetUsername} />
                        </div>
                        <div className={cx('row')}>
                            <input type={'password'} placeholder="Password" onChange={handleSetPassword} />
                        </div>
                        <div className={cx('btn-wrapper')}>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <button onClick={toggleModel} className={cx('close-btn')}>
                            X
                        </button>
                        {loginStatus && (
                            <div className={cx('error')}>
                                <p>Your Username and Password is incorrect</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Desc;
