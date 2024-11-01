import { Fragment, useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'
import { FadeInMotion, FadeInAndDown } from '@/components/FadeInMotion'
import { AnimateSVG } from '@/components/AnimateSVG'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <AnimateSVG>
      <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
        <path
          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
          fill="none"
        />
      </svg>
    </AnimateSVG>
  )
}

function MoonIcon(props) {
  return (
    <AnimateSVG>
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AnimateSVG>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-thematic-mobile-nav-btn-bg text-thematic-mobile-nav-btn-text hover:text-thematic-mobile-nav-btn-text-hover ring-thematic-mobile-nav-btn-border hover:ring-thematic-mobile-nav-btn-border-hover">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-thematic-mobile-nav-btn-text group-hover:stroke-thematic-mobile-nav-btn-text-hover" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-thematic-backdrop backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 bg-thematic-mobile-dropdown-fill ring-thematic-mobile-dropdown-border"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-thematic-mobile-dropdown-heading" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-thematic-mobile-dropdown-heading">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y text-base divide-thematic-mobile-dropdown-divide text-thematic-mobile-dropdown-subheading">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/products">Products</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-thematic-nav-page-active'
            : 'hover:text-thematic-nav-page-hover'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-thematic-nav-underline-weak via-thematic-nav-underline-strong to-thematic-nav-underline-weak" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full px-3 text-sm font-medium text-thematic-nav-page-unactive">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/products">Products</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  const [theme, setTheme] = useState()
  
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  const updateClass = useCallback((theme) => {
    if (typeof theme === 'undefined') { return } // exit early if theme is undefined
    const themes = {
      'light-theme': 'light-theme',
      'dark-theme': 'dark-theme',
      'amoled-theme': 'amoled-theme'
    }
    const classesToRemove = Object.values(themes).filter(cls => cls !== '')
    document.documentElement.classList.remove(...classesToRemove)
    if (theme != 'dark-theme') { document.documentElement.classList.remove('dark') }
    if (themes[theme].length > 0) {
      document.documentElement.classList.add(themes[theme])
      if (theme == 'dark-theme') { document.documentElement.classList.add('dark') }
    }
  }, [])

  const selectMode = useCallback(() => {
    disableTransitionsTemporarily()
    updateClass(theme)
  
    if (theme === 'light') {
      delete window.localStorage.theme
    } else {
      if (typeof theme === 'undefined') { return } // exit early if theme is undefined
      window.localStorage.theme = theme
    }
  }, [theme, updateClass])

  useEffect(() => {
    selectMode()
  }, [selectMode])

  return (
    <>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="group rounded-full px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur transition hidden dark:block bg-thematic-theme-btn-bg hover:bg-thematic-theme-btn-bg-hover ring-thematic-theme-btn-border hover:ring-thematic-theme-btn-border-hover"
        onClick={() => setTheme('light-theme')}
      >
        <SunIcon className="h-6 w-6 fill-amber-300 stroke-amber-400 transition group-hover:stroke-amber-400" />
      </button>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="group rounded-full px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur transition dark:hidden bg-thematic-theme-btn-bg hover:bg-thematic-theme-btn-bg-hover ring-thematic-theme-btn-border hover:ring-thematic-theme-btn-border-hover"
        onClick={() => setTheme('dark-theme')}
      >
        <MoonIcon className="h-6 w-6 fill-amber-300 stroke-amber-400 transition group-hover:stroke-amber-400"/>
      </button>
    </>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full p-0.5 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-thematic-avatar-container-bg ring-thematic-avatar-container-border'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full object-cover bg-thematic-avatar-container-bg',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export function Header() {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: 'var(--header-position)' }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: 'var(--header-inner-position)' }}
              >
                <div className="relative">
                  <FadeInMotion variants={FadeInAndDown} once_boolean={false}>
                    <AvatarContainer
                      className="absolute left-0 top-3 origin-left transition-opacity"
                      style={{
                        opacity: 'var(--avatar-border-opacity, 0)',
                        transform: 'var(--avatar-border-transform)',
                      }}
                    />
                    <Avatar
                      large
                      className="block h-16 w-16 origin-left"
                      style={{ transform: 'var(--avatar-image-transform)' }}
                    />
                  </FadeInMotion>
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="justify-end">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
