import Layout from '../components/Layout'
import '../styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application
