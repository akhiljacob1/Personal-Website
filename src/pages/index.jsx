import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TypeAnimation } from 'react-type-animation'
import { FadeIn, FadeInMotion } from '@/components/FadeInMotion'
import { AnimateSVG } from '@/components/AnimateSVG'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import LogoDishy from '@/images/logos/dishy.png'
import LogoCookieChimp from '@/images/logos/cookiechimp.png'
import LogoUrbanVolt from '@/images/logos/urbanvolt.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

export function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-thematic-icon-fill stroke-thematic-socials-icon-border"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-thematic-socials-icon-border"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <AnimateSVG>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-thematic-icon-fill stroke-thematic-icon-border"
        />
        <path
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
          className="stroke-thematic-icon-border"
        />
      </svg>
    </AnimateSVG>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TextLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm underline font-medium transition hover:text-thematic-link-hover text-thematic-link"
    >
      <span>{children}</span>
    </Link>
  )
}

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition hover:text-thematic-socials-link-hover text-thematic-socials-link"
      >
        <Icon className="h-6 w-6 flex-none fill-thematic-socials-icon-fill transition group-hover:fill-thematic-socials-icon-fill-hover" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'CookieChimp',
      description: 'AI-powered Consent Management Platform.',
      title: 'Full-stack Developer',
      logo: LogoCookieChimp,
    },
    {
      company: 'UrbanVolt',
      description: 'Global provider of affordable clean solar energy.',
      title: 'Full-stack Developer',
      logo: LogoUrbanVolt,
    },
    {
      company: 'Dishy',
      title: 'Intern Full-stack Developer',
      description: 'Food delivery platform for healthy meals.',
      logo: LogoDishy,
    },
  ]

  return (
    <div className="rounded-2xl border p-6 border-thematic-card-border">
      <h2 className="flex text-sm font-semibold text-thematic-resume-heading">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Products</span>
      </h2>
      <ol className="mt-6 space-y-6">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 border border-thematic-company-icon-border bg-thematic-company-icon-bg">
              <Image src={role.logo} alt="" className="w-9" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <div className="flex w-full justify-between">
                <dt className="sr-only">Company</dt>
                <dd className="flex-none text-sm font-medium text-thematic-company-name">
                  {role.company}
                </dd>
                <dt className="sr-only">Position</dt>
                <dd className="text-xs text-thematic-company-role">
                  {role.title}
                </dd>
              </div>
              <dt className="sr-only">Company Description</dt>
              <dd className="text-xs text-thematic-company-description">
                {role.description}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href={'/Akhil.pdf'} className="group mt-6 w-full">
        Open CV
        <ArrowDownIcon className="h-4 w-4 stroke-thematic-btn-text transition group-hover:stroke-thematic-btn-text-hover group-active:stroke-thematic-btn-text-hover" />
      </Button>
    </div>
  )
}

function Socials() {
  let socials = [
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/akhiljacob/',
    },
    {
      name: 'GitHub',
      icon: GitHubIcon,
      link: 'https://github.com/akhiljacob1',
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      link: 'https://twitter.com/TheAkhilJacob',
    },
  ]

  return (
    <div className="rounded-2xl border p-6 border-thematic-card-border">
      <ul role="list">
        {socials.map((social) => (
          <SocialLink
            href={social.link}
            icon={social.icon}
            key={social.name}
            className="mt-4"
          >
            Follow on {social.name}
          </SocialLink>
        ))}
        <SocialLink
          href="mailto:im@akhiljacob.com"
          icon={MailIcon}
          className="mt-8 border-t pt-6 border-thematic-card-border"
        >
          im@akhiljacob.com
        </SocialLink>
      </ul>
    </div>
  )
}

function YearsOfExperience() {
  var start_date = new Date(2021, 4, 1);
  var timeDifference = Date.now() - start_date;
  var experienceDate = new Date(timeDifference); // miliseconds from epoch
  var yearsOfExperience = experienceDate.getUTCFullYear() - 1970;
  if (experienceDate.getUTCMonth() > 5 || (experienceDate.getUTCMonth() === 5 && experienceDate.getUTCDate() >= 1)) {
    yearsOfExperience += 1; // Round up if past May 1st
  }
  return yearsOfExperience
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Akhil Jacob - Full-stack developer and an amateur guitarist.
        </title>
        <meta
          name="description"
          content="I’m Akhil, a full-stack developer with experience developing apps for myself and clients."
        />
      </Head>
      <Container className="mt-9">
        <FadeInMotion once_boolean={false} className="max-w-3xl pb-24 md:pb-28">
          <h1 className="h-32 overflow-auto text-2xl font-bold tracking-tight text-thematic-heading sm:h-60 sm:text-5xl md:h-48 xl:h-32">
            <span className="mr-1 sm:mr-3">
              Ruby on Rails developer passionate about
            </span>
            <TypeAnimation
              sequence={[
                'learning and applying.',
                2000,
                'startups.',
                2000,
                'making meaningful solutions.',
                2000,
                'sharing knowledge.',
                2000,
                'playing music.',
                2000,
              ]}
              deletionSpeed={80}
              className="text-transparent bg-clip-text bg-gradient-to-br from-thematic-accented-text-1 to-thematic-accented-text-2"
              repeat={Infinity}
            />
          </h1>
          <p className="mt-2 text-base text-thematic-subheading">
            Hey! I'm Akhil, a full-stack developer that loves creating web
            applications. I've worked on various projects, including a web3 game
            and SaaS apps with AI integration. I am passionate about learning and view every
            challenge and opportunity as a way to continue my growth.
          </p>
        </FadeInMotion>
        <div className="pt-24 md:pt-28">
          <FadeInMotion
            variants={FadeIn}
            className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
          >
            <div className="lg:order-first lg:row-span-2">
              <div className="space-y-7 text-base text-thematic-body">
                <p>
                  I'm a developer with a passion for creating cool things. I've
                  been tinkering with code for about {YearsOfExperience() + 1} years now, but it's
                  only been {YearsOfExperience()} years since I started my professional journey.
                </p>
                <p>
                  Before I became a full-fledged developer, I used to dabble in
                  small personal projects in Python. But then I completed a
                  six-month internship in full-stack development with Ruby on
                  Rails and stumbled upon a new interest. Since then I've worked
                  with clients to develop web apps.
                </p>
                <p>
                  {"I'm always excited to learn about new tech and adapt to changing times. In the past two years, I've been exploring the web3 space and AI, which led me to work on exciting projects like Zedball and Nextmove and with companies like "}
                  <TextLink href="https://www.digitalgenius.com">Digital Genius</TextLink>.
                </p>
                <p>
                  I'm always open to new ideas and opportunities. Whether you'd
                  like to chat about a project or just drop a friendly greeting,
                  feel free to get in touch!
                </p>
              </div>
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Resume />
              <Socials />
            </div>
          </FadeInMotion>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
