import Link from 'next/link'
import { HOME } from '../../../../../../constants/internalLinks'
import cl from './Logo.module.scss'

const Logo = () => {
  return (
    <Link href={HOME}>
    <a className={cl.logo}>bellesa</a>
  </Link>
  )
}

export default Logo