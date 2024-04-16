import { useRouter } from 'next/router'

export default function DetailPage() {
  const router = useRouter()

  return(
    <h1>The News Detail Page, {router.query.newsId}</h1>
  )
}