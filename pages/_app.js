// import App from 'next/app'
import Layout from "../components/Layout/Layout";
import loadingContext from "../context/loadingContext";
import "../styles/Global.css";
import lazyLoad from "../components/LazyLoad";

/* export function reportWebVitals(metric) {
     console.log(metric) 
    serverAnalytics.log()
}
 */
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
