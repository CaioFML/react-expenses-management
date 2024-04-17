import Link from 'next/link';

export default function NewsPage() {
  return(
    <>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/test'>Test</Link></li>
      </ul>
    </>

  )
}