import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

export default function LayoutRoot() {
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