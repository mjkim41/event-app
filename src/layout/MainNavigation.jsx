import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {

    // NavLink에 className 바인딩 하는 함수
    const activeFn = ({isActive}) => {
        return isActive? styles.active : '';
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink
                            to='/'
                            className={activeFn}
                            end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={activeFn}
                            to='/events'
                        >
                            Events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;