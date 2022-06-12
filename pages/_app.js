import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <ToastContainer />
                <Head>
                    <title>NextJs Tool Kit</title>
                    <meta name="description" content="WibuSama" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default MyApp
