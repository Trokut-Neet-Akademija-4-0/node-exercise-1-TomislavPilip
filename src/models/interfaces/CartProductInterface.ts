import IProduct from './ProductInterface'

interface ICartProduct {
  id: number
  product: IProduct
  quantity: number
}

export default ICartProduct
