import Link from 'next/link'
import { CartIcon } from '../shared/cart-icon'
import { Logo } from '../shared/logo'

export function Header() {
  const quantityOfItems = 0

  return (
    <header
      className="flex flex-col h-20"
      style={{
        background:
          'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
      }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href={'/checkout/cart'}>
            <CartIcon quantityOfItens={quantityOfItems} />
          </Link>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20" />
    </header>
  )
}
