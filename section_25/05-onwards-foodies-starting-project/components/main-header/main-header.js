import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css'

import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}