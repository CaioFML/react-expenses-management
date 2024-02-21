import Link from 'next/link';

import logoImg from '@/assets/logo.png'

export default function MainHeader() {
  return (
    <header>
      <h1>Foodies</h1>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">
              Meals
            </Link>
          </li>
          <li>
            <Link href="/meals/share">
              Share
            </Link>
          </li>
          <li>
            <Link href="/community">
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}