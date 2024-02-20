import Link from 'next/link';

export default function Page({ params }) {
  return (
    <main>
      <p>🔥 Blog post 🔥</p>
      <p>{params.slug}</p>
    </main>
  );
}