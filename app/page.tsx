import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <h1>Train Departures</h1>
      </div>
      <ul className={styles.grid}>
        <li>
          <Link href="/departures/basel">
            <h2 className={inter.className}>Basel</h2>
          </Link>
        </li>
        <li>
          <Link href="/departures/geneva">
            <h2 className={inter.className}>Geneva</h2>
          </Link>
        </li>

      </ul>
    </main>
  )
}
