import { Layout } from '../components'
import StateContext from '../Context/StateContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
