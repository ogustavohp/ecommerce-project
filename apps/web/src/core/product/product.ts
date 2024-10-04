import type Priceable from './priceable'
import type Specifications from './specifications'

export default interface Product extends Priceable {
  id: number
  name: string
  description: string
  brand: string
  model: string
  image: string
  note: number
  videoReview: string
  tags: string[]
  specifications: Specifications
}
