import type { Product } from '@store/core'
import Image from 'next/image'
import { Specifications } from './specifications'

interface ProductInformation {
  product: Product
}

export function ProductInformation({ product }: ProductInformation) {
  return (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={product.image}
          fill
          className="object-contain p-7"
          alt="product image"
        />
      </div>
      <Specifications product={product} />
    </div>
  )
}
