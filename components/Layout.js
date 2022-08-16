import Head from "next/head";
import styles from "../styles/Home.module.css";
import PropTypes from "prop-types";
import Link from "next/link";
import NavBar from "./NavBar";

const Layout = ({
  children,
  description = "default description",
  title = "Default Title",
  footer = true,
}) => {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <article>
        <header>
          <Link href={"/"}>Newsapi</Link>
          <NavBar />
        </header>
        <main className={styles.container}>{children}</main>
        {footer && (
          <footer>
            <h2>Footer</h2>
          </footer>
        )}
      </article>
    </>
  );
};

export default Layout;
Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.bool,
};
