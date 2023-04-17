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
        <Link
            href={href}
            className={`${isActive} block py-2 pl-3pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
        >
            {children}
        </Link>
    )
}
