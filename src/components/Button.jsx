import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'font-medium bg-skin-fill/50 text-skin-secondary-1 hover:bg-skin-fill hover:text-skin-primary-2 active:bg-skin-fill/50 active:text-primary-2',
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
