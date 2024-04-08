import ICartProduct from './interfaces/CartProductInterface'
import Icart from './interfaces/CartInterface'

class Cart implements Icart {
  constructor() {
    this.id = 0
    this.products = []
    this.total = 0
    this.discountedTotal = 0
    this.totalProducts = 0
    this.totalQuantity = 0
    this.userId = 0
  }
  id: number
  products: ICartProduct[]
  total: number
  discountedTotal: number
  totalProducts: number
  totalQuantity: number
  userId: number
}

export default new Cart()
