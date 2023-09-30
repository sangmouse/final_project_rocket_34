import images from "images";
import { Link } from "react-router-dom";
import styles from "styles/header.module.scss"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__item}>
                <Link to="/" className={styles.header__link}>
                    <img src={images.logoVti} alt="" width={200} />
                </Link>
            </div>
            <div className={styles.header__item}>
                <ul>
                    <li>
                        <Link to="login" className={styles.header__item__link}>Login</Link>
                    </li>
                    <li>
                        <button className={styles.header__item__btn}>Sign out</button>
                    </li>
                    <li>
                        <button className={styles.header__item__avatar}>
                            <img src={images.avatar} alt="" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}