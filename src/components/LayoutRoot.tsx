import Footer from "components/Footer";
import Header from "components/Header";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function LayoutRoot() {
    const navigate = useNavigate()

    useEffect(function () {
        const userToken = localStorage.getItem("userToken")
        if (!userToken) {
            navigate("/login")
        } else {
            navigate("/")
        }
    }, [])

    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}