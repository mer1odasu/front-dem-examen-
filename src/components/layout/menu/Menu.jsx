import styles from "./Menu.module.scss";
import {menu} from "./menu.data.js";
import {Link} from "react-router-dom";

const Menu = () => {

    const logoutHandler = () => {}

    return (
        <nav className={styles.menu}>
            <ul>
                {menu.map((item, index) =>
                    <li key={`_menu_${index}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                )}
                <li>
                    <buuton onClick={logoutHandler}>Выйти</buuton>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;