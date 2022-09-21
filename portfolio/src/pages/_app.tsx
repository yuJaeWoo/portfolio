import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/layout'
import useDeviceCheck from '@hooks/useDeviceCheck'

function MyApp({ Component, pageProps }: AppProps) {
const {isDesktopOrMobile} = useDeviceCheck();
// console.log("isPc?", isDesktopOrMobile)

  return isDesktopOrMobile ? (
    <div>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  ) : 
  (
    <div>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  )
}

export default MyApp
