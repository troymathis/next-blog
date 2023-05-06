import '../styles/globals.css'


// global css, styles applied to entire app
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}