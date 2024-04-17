import SideNav from "@/components/side-nav"

interface WebAppLayoutProps {
    children: React.ReactNode
}

export default function WebAppLayout({ children }: WebAppLayoutProps) {
    return <main className="w-full h-screen flex">
        <SideNav />
        {children}
    </main>
}