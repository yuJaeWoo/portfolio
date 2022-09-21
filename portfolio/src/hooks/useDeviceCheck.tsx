import React from 'react'
import { useMediaQuery } from 'react-responsive'

const useDeviceCheck = () => {
     
      const isDesktopOrMobile = useMediaQuery({ minDeviceWidth: 768 })
      const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
      const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
      const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
      const isPortrait = useMediaQuery({ orientation: 'portrait' })
      const isRetina = useMediaQuery({ minResolution: '2dppx' })
     
      return {isDesktopOrMobile, isBigScreen, isTabletOrMobile,isTabletOrMobileDevice,isPortrait,isRetina}
}
export default useDeviceCheck