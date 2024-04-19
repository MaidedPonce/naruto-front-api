// import App from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../components/Layout/Layout'
import '../styles/Global.css'

/* export function reportWebVitals(metric) {
     console.log(metric) 
    serverAnalytics.log()
}
 */

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
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

export default MyApp
