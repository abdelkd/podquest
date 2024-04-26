import { Suspense } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { getPodcasts } from "@/lib/fyydUtils"

const PodcastItem = dynamic(() => import('./podcast-item'), { ssr: false })

function PodcastSkeleton() {
  const arr = Array(30).fill(null).map((_, i) => i+1)
    return <div className="grid grid-cols-fluid gap-4 gap-y-8 auto-cols-min pt-7">
      {arr.map(i => (<div className="size-32 bg-gray-300 animate-pulse rounded-lg" key={i}></div>))}
    </div>
}

async function PodcastsGrid({}: any) {
  const podcasts = await getPodcasts({})

  return <div className="grid grid-cols-fluid gap-4 gap-y-6 auto-cols-min pt-7">
      {podcasts.map((podcast => (
        <Link href={'/podcast/'+podcast.id} key={podcast.id}>
          <PodcastItem podcast={podcast} />
        </Link>
      )))}
  </div>
}

export default async function Page() {
  return <section className="w-full h-screen flex-grow pt-5 pb-8 pl-5 overflow-y-scroll">
    <div className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0 mb-4">
        Discover:
      </h2>
      <Suspense fallback={<PodcastSkeleton />}>
        <PodcastsGrid />
      </Suspense>
    </div>
  </section>
}
