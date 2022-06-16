import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <title>NextJs Tool Kit</title>
                    <meta name="description" content="WibuSama" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="min-h-screen">
                    <ToastContainer />
                    <Navigation />
                    <Component {...pageProps} />
                </div>
            </Provider>
        </>
    )
}

export default MyApp
