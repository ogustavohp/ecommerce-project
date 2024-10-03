import { ProductInformation } from '@/components/product/product-information'
import { ProductNotFound } from '@/components/product/product-not-found'
import { ProductTitle } from '@/components/product/product-title'
import { PurchaseBanner } from '@/components/product/purchase-banner'
import { products } from '@/core'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(product => product.id === Number(params.id))

  if (!product) {
    return <ProductNotFound />
  }

  return (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInformation product={product} />
        <PurchaseBanner product={product} />
      </div>
    </div>
  )
}
