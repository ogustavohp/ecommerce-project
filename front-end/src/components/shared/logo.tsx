import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href={'/'} className="flex items-center gap-3">
      <Image src={'/logo.png'} height={60} width={60} alt="logo" />
      <Image src={'/logo-text.png'} height={60} width={300} alt="logo" />
    </Link>
  )
}
