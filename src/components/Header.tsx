import images from "images";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "styles/header.module.scss"

export default function Header() {
    const [token, setToken] = useState<string | null>()
    const navigate = useNavigate()

    useEffect(function () {
        const userToken = localStorage.getItem("userToken")
        setToken(userToken)
    }, [])

    function handleSignout() {
        localStorage.removeItem("userToken")
        navigate("/login")
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__item}>
                    <Link to="/" className={styles.header__link}>
                        <img src={images.logoVti} alt="" width={200} />
                    </Link>
                </div>
                <div className={styles.header__item}>
                    <ul>
                        {
                            !token && <li>
                                <Link to="login" className={styles.header__item__link}>Login</Link>
                            </li>
                        }

                        {
                            token && <>
                                <li>
                                    <button className={styles.header__item__btn} onClick={handleSignout}>Sign out</button>
                                </li>
                                <li>
                                    <button className={styles.header__item__avatar}>
                                        <img src={images.avatar} alt="" />
                                    </button>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}