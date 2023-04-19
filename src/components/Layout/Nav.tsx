import routes from '@/src/utils/routes'
import ActiveLink from '../ActiveLink/ActiveLink'

export default function Nav() {
    return (
        <nav className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                {routes.map((route, index) => {
                    return (
                        <li key={index}>
                            {
                            <ActiveLink href={route.path}>
                                {route.label}
                            </ActiveLink>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}