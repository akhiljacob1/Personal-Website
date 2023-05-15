import { Container } from '@/components/Container'
import { SocialLink } from '@/pages/index'
import { MailIcon } from '@/pages/index'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'

export function Footer() {
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
    {
      name: 'Email',
      icon: MailIcon,
      link: 'mailto:im@akhiljacob.com',
    },
  ]
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t pb-16 pt-10 border-thematic-footer-divide">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-2 text-sm font-medium">
                {socials.map((social) => (
                  <SocialLink
                    href={social.link}
                    icon={social.icon}
                    key={social.name}
                    className="mt-4"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-thematic-footer-copyright">
                &copy; {new Date().getFullYear()} • Akhil Jacob
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
