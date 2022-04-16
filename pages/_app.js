// import App from 'next/app'
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import narutoReducer from "../reducers/narutoReducer"
import Layout from "../components/Layout/Layout";
import "../styles/Global.css";
import { logActions } from "../middleware";

/* export function reportWebVitals(metric) {
     console.log(metric) 
    serverAnalytics.log()
}
 */

function MyApp({ Component, pageProps }) {

    const composeEnhancers = compose(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logActions))
    const store = createStore(narutoReducer, composeEnhancers)

    return (
        <>
            <Layout>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
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
