import Link from 'next/link';
import classes from './page.module.css';

import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '../lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'All Meals',
  description: 'Browse meals',
};

async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>with passion</span>
        </h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}