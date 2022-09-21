import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/layout'
import useDeviceCheck from '@hooks/useDeviceCheck'
function MyApp({ Component, pageProps }: AppProps) {
const {isDesktopOrLaptop} = useDeviceCheck();
  console.log(isDesktopOrLaptop)
  return isDesktopOrLaptop ? (
    <div className='desktop'>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  ) : 
  (
    <div className='tablet'>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  )
}

export default MyApp
