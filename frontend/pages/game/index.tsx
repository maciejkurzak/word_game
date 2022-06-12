import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/header'

const Game = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Games</h1>
    </>
  )
}

export default Game
