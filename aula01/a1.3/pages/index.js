import Link from 'next/link'

export default function HomePage() {
  return (
    <div>Welcome to Next.js!
      <ul>
        <li>
          <img src="/images/avatar.jpeg" alt="" width='40px' heigth='40px' />
        </li>
        <li>
          <Link href="/sobre">
            Ir para a /sobre
          </Link>
        </li>
      </ul>
    </div>
  )
}
