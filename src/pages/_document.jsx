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
      <body className="flex h-full flex-col bg-no-repeat bg-amber-200 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-200 to-50% dark:bg-skin-bg-1 dark:from-skin-bg-1 dark:via-skin-bg-2 dark:to-skin-bg-3 dark:to-50%">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
