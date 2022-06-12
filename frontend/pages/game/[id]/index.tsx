import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Game = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Game: {id}</h1>
      <ul>
        <li>
          <Link href="/game/[id]/[comment]" as={`/game/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/game/[id]/[comment]" as={`/game/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
        <li>
          <Link href="/game/[id]/[comment]" as={`/game/${id}/third-comment`}>
            <a>Third comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Game
