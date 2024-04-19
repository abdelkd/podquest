
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
    createLink('/hub', 'Browse'),
    createLink('/queue', 'Queue'),
    createLink('/subsciptions', 'Subscriptions'),
]