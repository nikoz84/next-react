import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type ActiveLinkProps = {
    children: ReactNode
} & LinkProps

export default function ActiveLink({
    href,
    children,
    ...props
}: ActiveLinkProps) {
    const pathname = usePathname()
    
    const isCurrent =
        pathname === href ||
        pathname === props?.as ||
        pathname?.startsWith(String(props.as))
    
    const isActive = isCurrent ? 'active' : ''

    return (
        <Link href={href} className={`${isActive}`}>
            {children}
        </Link>
    )
}
