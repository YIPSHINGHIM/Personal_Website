import Link from 'next/link';
export default function NotFound() {
  return <main className="site-shell">
    <span className="eyebrow">404</span><h1>Page not found</h1>
    <p>Let&apos;s get you back to the portfolio.</p>
    <Link className="primary-link" href="/">Back to home<span aria-hidden="true">↗</span></Link>
  </main>;
}
