import ICartProduct from './interfaces/CartProductInterface'
import IProduct from './interfaces/ProductInterface'

class CartProduct implements ICartProduct {
  /////1. Constructor is called when instance of CLASS is created/////
  /////2. Constructor uses three  PARAMETERS and they represent INITIAL STATE of the CART PRODUCT/////
  /////1. Constructor is called when instance of CLASS is created/////
  constructor(id: number, product: IProduct, quantity: number) {
    this.id = id
    this.product = product
    this.quantity = quantity
  }
  id: number
  product: IProduct
  quantity: number
}

export default CartProduct
