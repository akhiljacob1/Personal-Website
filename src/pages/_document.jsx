import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  updateMode()
  function updateMode() {
    let isDarkMode = window.localStorage.theme === 'dark' || !('theme' in window.localStorage)

    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.add(window.localStorage.theme)
    }
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </Head>
      {/* set bg-color here to choose the color that appears on the edge when we scroll and reach that edge. */}
      <body className="flex h-full flex-col bg-no-repeat bg-gradient-to-b bg-thematic-bg-1 from-thematic-bg-1 via-thematic-bg-2 to-thematic-bg-3 to-50%">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
