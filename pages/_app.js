import "../styles/globals.css";
import "@picocss/pico/css/pico.classless.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />;
      </main>
    </>
  );
}

export default MyApp;
