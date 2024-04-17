'use client'

import { links } from "@/lib/links";
import clsx from "clsx";

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItemProps {
  label: string
  href: string
}

interface PodcastItemProps {
  imgUrl: string
  label: string
  href: string
}

function NavItem({ label, href }: NavItemProps) {
  const isActive = usePathname() === href;
  const itemStyles = clsx('p-3 rounded-xl', {
    'bg-primary text-primary-foreground': isActive,
    'hover:bg-accent': !isActive
  })

    return <Link href={href}>
    <li className={itemStyles}>
      <p className="font-semibold">{label}</p>
    </li>
  </Link>
}

function PodcastItem({ imgUrl, href, label }: PodcastItemProps) {
  const isActive = usePathname() === href;
  const itemStyles = clsx('p-3 flex items-center rounded-xl', {
    'bg-primary text-primary-foreground': isActive,
    'hover:bg-accent': !isActive
  })

  return <Link href={href}>
    <li className={itemStyles}>
      <div className="w-5 h-5 bg-gray-300 mr-3" />
      <p className="text-sm font-semibold">Podcast Name</p>
      <p className="ml-auto text-xs text-gray-500">99</p>
    </li>
  </Link>
  
}

function SideNav() {
  // TODO: make mobile friendly menu
  return <div className="h-full hidden sm:block sm:min-w-64 pt-3 border-r border-border shadow">
      <div className="w-full h-full px-4 flex flex-col gap-3">
        {/* Navigations */}
        <ul className="space-y-1 flex flex-col">
          {links.map(link => <NavItem key={link.href} {...link} />)}
        </ul>

        <div className="h-0.5 border border-gray-300 w-full" />

        {/* Podcasts */}
        <ul className="space-y-1 flex flex-col">
          <PodcastItem label="" imgUrl="" href="" />
        </ul>
      </div>
  </div>
}

export default SideNav