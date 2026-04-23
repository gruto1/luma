"use client";
import { usePathname } from "next/navigation";
import { navLinks } from '@/constants/navLinks'
import Link from 'next/link'

type NavProps = {
    className?: string;
    onClick?: () => void;
}

const Nav = ({className, onClick}:NavProps) => {
    const pathname = usePathname();
    return (
        <nav className={className} onClick={onClick}>
            <ul className='md:ml-6 flex-col md:flex-row items-start md:items-center gap-7 flex'>
                {
                    navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return <li key={link.href}>
                            <Link data-active={isActive} className='text-sm text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-medium' href={link.href}>{link.label}</Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav

