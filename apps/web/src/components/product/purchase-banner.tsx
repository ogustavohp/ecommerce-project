'use client'
import { useInstallment } from '@/data/hooks/useInstallment'
import { Currency, type Product } from '@store/core'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface PurchaseBannerProps {
  product: Product
}

export function PurchaseBanner({ product }: PurchaseBannerProps) {
  const router = useRouter()
  const installment = useInstallment(product.promotionalPrice)

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-400">
          {' '}
          de R$ {product.basePrice}
        </div>

        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>
          <span className="text-emerald-500">
            R$ {product.promotionalPrice}
          </span>
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {installment.numberOfInstallments} x de
        </span>
        {Currency.format(installment.installmentAmount)}
      </div>

      <div className="flex gap-2 items-center">
        <button
          type="button"
          className="flex-1 button bg-pink-600"
          onClick={() => {
            console.log('a')
          }}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>

        <button
          type="button"
          className="flex-1 button bg-violet-700"
          onClick={() => {
            router.push('/checkout/payment')
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  )
}
