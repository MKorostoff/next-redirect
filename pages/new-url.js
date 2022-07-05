import { useRouter } from 'next/router'
export default function NewUrl() {
  const router = useRouter()
  const { code } = router.query;
  return <div>Code is {code}</div>
}
