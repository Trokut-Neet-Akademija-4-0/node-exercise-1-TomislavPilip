import express, { Request, Response } from 'express'
import ProductService from '../services/ProductService'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send(ProductService.getAllProducts())
})
router.get('/:id', (req: Request, res: Response) => {
  res.send(ProductService.getProductById(Number.parseInt(req.params.id, 10)))
})
router.delete('/:id', (req: Request, res: Response) => {
  res.send(ProductService.deleteProductById(Number.parseInt(req.params.id, 10)))
})

export default router
