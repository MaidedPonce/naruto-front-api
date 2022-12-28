// import App from 'next/app'
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import "../styles/Global.css";
import { store } from "../redux/store";
/* export function reportWebVitals(metric) {
     console.log(metric) 
    serverAnalytics.log()
}
 */

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
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
