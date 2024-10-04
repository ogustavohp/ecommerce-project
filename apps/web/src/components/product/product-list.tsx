'use client'
import { products } from '@store/core'
import { ProductItem } from './product-item'
import { ProductNotFound } from './product-not-found'

export function ProductList() {
  if (!products.length) {
    return <ProductNotFound />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <ProductItem key={product.id + i} product={product} />
      ))}
    </div>
  )
}
