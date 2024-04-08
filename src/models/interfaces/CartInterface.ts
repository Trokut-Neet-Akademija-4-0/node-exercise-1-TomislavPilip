import ICartProduct from './CartProductInterface'

interface Icart {
  id: number
  products: ICartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export default Icart
