import CartProduct from '../models/CartProductModel'
import Icart from '../models/interfaces/CartInterface'
import UserCart from '../models/CartModel'
import ProductService from './ProductService'

class CartService {
  private cart: Icart = UserCart

  ////This is function that is going to show us cart
  getCart(): Icart {
    return this.cart
  }

  ////Adding product in cart by product ID
  addProductById(id: number): Icart {
    this.changeProductQuantity(id, 1)
    return this.cart
  }
  deleteProductById(id: number): Icart {
    const indexToDelete = this.getCartProductIndexByProductId(id)
    if (indexToDelete >= 0) this.cart.products.splice(indexToDelete, 1)
    return this.cart
  }

  //Method that creates product in cart if it doesnt exist
  changeProductQuantity(productId: number, quantityModifier: number): void {
    const product = ProductService.getProductById(productId)
  }
}

export default new CartService()
