import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2023 My App</footer>
    </div>
  );
}
