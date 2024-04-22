import { Suspense } from 'react'
import Image from 'next/image'

import { getPodcasts } from "@/lib/fyydUtils"
import PodcastsGrid from './podcast-grid'


function PodcastSkeleton() {
    return <div className="size-32 bg-gray-300 animate-pulse rounded-lg">
    </div>
}

function PodcastItem({ podcast }: any) {
  console.log("pod", podcast.imgURL)
  return <div className="size-32 rounded-lg">
    <Image alt="podcast" height={128} width={128}  src={"https://www.thenakedscientists.com/sites/default/files/media/media/images/NS_Podcasts_1400.png"} />
  </div>
}

async function PodcastsGrid({}: any) {
  const podcasts = await getPodcasts({})

  return <div className="grid grid-cols-fluid gap-4 auto-cols-min pt-7">
      {podcasts.map((podcast => (
        <PodcastItem podcast={podcast} />
      )))}
  </div>
}

export default async function Page() {
  return <section className="w-full h-screen flex-grow pt-5 pb-8 pl-5 overflow-y-scroll">
    <div className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0">
        Discover:
      </h2>
      <Suspense fallback={<PodcastSkeleton />}>
        <PodcastsGrid />
      </Suspense>
    </div>
  </section>
}
