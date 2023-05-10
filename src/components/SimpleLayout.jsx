import { Container } from '@/components/Container'
import { FadeInMotion } from '@/components/FadeInMotion'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <FadeInMotion once_boolean={false} className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-thematic-heading sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-thematic-subheading">
          {intro}
        </p>
      </FadeInMotion>
      
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
