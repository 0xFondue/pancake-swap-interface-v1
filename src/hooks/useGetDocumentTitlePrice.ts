import { useEffect } from 'react'
import useGetCakeBusdLpPrice from 'utils/useGetCakeBusdLpPrice'

const useGetDocumentTitlePrice = () => {
  const cakePriceBusd = useGetCakeBusdLpPrice()

  const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address]?.price ?? 0) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceBusd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `PancakeSwap${cakePriceBusdString}`
  }, [cakePriceBusdString])
}
export default useGetDocumentTitlePrice
