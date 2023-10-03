import { SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"
import styles from "styles/reset.module.scss"

export default function ResetAccount() {
    const navigate = useNavigate()

    function onSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault()
        navigate("/login")
    }

    return (
        <div className={styles["reset-account"]}>
            <form action="" onSubmit={onSubmit}>
                <div className={styles.form}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Your email here" />
                </div>
                <p style={{
                    textAlign: "center"
                }}>
                    <button className={styles.btn}>Reset password</button>
                </p>

            </form>
        </div>
    )
}