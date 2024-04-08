import IProduct from '../models/interfaces/ProductInterface'
import products from '../models/ProductModel'

class ProductService {
  //This is standard procedure to put private (it encapsulates something for data protection)
  private products: IProduct[] = products

  //This means
  getAllProducts(): IProduct[] {
    return this.products
  }

  ///Here we use PIPE SYMBOL which means that function can return IProduct type or undefined
  getProductById(id: number): IProduct | undefined {
    return this.products.find((product) => (product.id = id))
  }

  deleteProductById(id: number): IProduct | undefined {
    ////First we detect which element we want to delete and store in to variable
    const indexToDelete = this.products.findIndex(
      (product) => product.id === id,
    )
    if (indexToDelete < 0) return undefined

    ////Using splice method we make an array with that element at the index we want to delete
    const deletedProduct = this.products.splice(indexToDelete, 1)

    /////And then we return that element at index 0, cause it is the only one
    return deletedProduct[0]
  }
}

export default new ProductService()
