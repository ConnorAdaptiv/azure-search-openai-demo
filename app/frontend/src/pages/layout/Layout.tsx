import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>VuW Policy Document Chatbot</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}></ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + AI Search</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
