import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


type SectionHeadingProps = {
  eyebrow?: string
  title: string
  link?: string
  linkLabel?: string
}


const SectionHeading = ({eyebrow, title, link, linkLabel}:SectionHeadingProps) => {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-2 text-3xl tracking-tight text-foreground md:text-4xl">{title}</h2>
      </div>
      {link && linkLabel && (
        <Link href={link} className="hidden items-center gap-1 text-sm font-medium text-foreground hover:underline md:inline-flex">
          {linkLabel} <ArrowRight size={14} />
        </Link>
      )}
    </div>
  )
}

export default SectionHeading
