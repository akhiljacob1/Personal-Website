import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'font-medium bg-thematic-btn-bg text-thematic-btn-text hover:bg-thematic-btn-bg-hover hover:text-thematic-btn-text-hover active:bg-thematic-btn-bg',
  secondary:
    '',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
