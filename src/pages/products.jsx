import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import LogoDishy from '@/images/logos/dishy.png'
import LogoZedball from '@/images/logos/zedball.png'
import LogoNextmove from '@/images/logos/nextmove.png'
import LogoCookieChimp from '@/images/logos/cookiechimp.png'
import LogoUrbanVolt from '@/images/logos/urbanvolt.png'
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from '@/components/FadeInMotion'

const products = [
  {
    id: 1,
    name: 'Zedball',
    description:
      'Multiplayer football manager game with Sorare NFT collectible cards.',
    link: null,
    logo: LogoZedball,
  },
  {
    id: 2,
    name: 'Nextmove',
    description: 'Open text feedback tool drawing insights with AI.',
    link: null,
    logo: LogoNextmove,
  },
  {
    id: 3,
    name: 'Dishy',
    description: 'Food delivery platform for healthy meals, generating revenue upwards of €50k/mo.',
    link: { href: 'https://getdishy.com', label: 'getdishy.com' },
    logo: LogoDishy,
  },
  {
    id: 4,
    name: 'CookieChimp',
    description: 'AI-powered Consent Management Platform.',
    link: { href: 'https://cookiechimp.com', label: 'cookiechimp.ai' },
    logo: LogoCookieChimp,
  },
  {
    id: 5,
    name: 'UrbanVolt',
    description: 'Award-winning global provider of affordable clean solar energy.',
    link: { href: 'https://urbanvolt.com/', label: 'urbanvolt.com' },
    logo: LogoUrbanVolt,
  },
].reverse()

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - Akhil Jacob</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Products I've worked on."
        intro="I'm a versatile developer and have worked on a variety of projects. Here are some of the software products I've built. Aside from my main hustle, I have some ideas brewing in the background. I'll share them here soon... hopefully 🤞"
      >
        <motion.ul
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          variants={StaggerContainer}
          initial="hidden"
          animate="visible"
          role="list"
        >
          {products.map((product) => (
            <motion.li key={product.id} className="item" variants={StaggerItem}>
              <Card
                key={product.name}
                className="flex-cols flex h-full justify-between"
              >
                <div>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 border border-thematic-company-icon-border bg-thematic-company-icon-bg">
                    <Image
                      src={product.logo}
                      alt=""
                      className="w-9"
                      unoptimized
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-thematic-product-name">
                    <Card.Link href={product.link?.href || ''}>{product.name}</Card.Link>
                  </h2>
                  <Card.Description>{product.description}</Card.Description>
                </div>
                {product.link && (
                  <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-thematic-link-hover text-thematic-link">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{product.link.label}</span>
                  </p>
                )}
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </SimpleLayout>
    </>
  )
}
