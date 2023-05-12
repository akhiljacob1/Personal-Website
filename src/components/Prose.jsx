import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div className={clsx(className, 'prose prose-invert prose-img:rounded-2xl prose-pre:rounded-xl prose-pre:px-7 prose-pre:py-5 prose-pre:hide-scrollbar prose-li:px-2 prose-li:my-3 prose-code:font-normal prose-code:rounded-sm')}>{children}</div>
  )
}
