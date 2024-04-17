
type Link = {
    href: string,
    label: string,
}

const createLink = (href: string, label: string): Link => {
    return {
        href,
        label,
    }
}

export const links: Link[] = [
    createLink('/hub', 'Home'),
    createLink('/queue', 'Queue'),
    createLink('/browse', 'Browse'),
    createLink('/subsciptions', 'Subscriptions'),
]