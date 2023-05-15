import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from '@/components/FadeInMotion'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Akhil Jacob</title>
        <meta
          name="description"
          content="A collection of good practices, tutorials, lessons learned and more.."
        />
      </Head>
      <SimpleLayout
        title="Coding insights, software tutorials, and brainwaves from a curious mind."
        intro="A collection of good practices, tutorials, lessons learned and more."
      >
        <div className="md:border-l md:pl-6 md:border-thematic-date-border">
          <motion.ul
            className="flex max-w-3xl flex-col space-y-16"
            variants={StaggerContainer}
            initial="hidden"
            animate="visible"
            role="list"
          >
            {articles.map((article) => (
              <motion.li key={article.slug} className="item" variants={StaggerItem}>
                <Article article={article} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
