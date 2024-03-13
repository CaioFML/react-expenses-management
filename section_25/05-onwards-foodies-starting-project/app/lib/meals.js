import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // throw new Error('Failed to fetch meals')

  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true })

  const stmt = db.prepare('INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (?, ?, ?, ?, ?, ?, ?)')
  stmt.run(
    xss(meal.title),
    xss(meal.summary),
    xss(meal.instructions),
    xss(meal.image),
    xss(meal.creator),
    xss(meal.creator_email),
    slug
  )

  return slug
}