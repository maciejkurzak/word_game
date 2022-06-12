import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/game/first">
          <a>First Game</a>
        </Link>
      </li>
      <li>
        <Link href="/game/second">
          <a>Second Game</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
