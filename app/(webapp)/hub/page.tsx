import { Suspense } from 'react'
import Image from 'next/image'

import { getPodcasts } from "@/lib/fyydUtils"

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

export async function PodcastsGrid({data}: any) {

  return <div className="grid grid-cols-fluid gap-4 auto-cols-min pt-7">
      {data.map((podcast => (
        <Suspense fallback={<PodcastSkeleton />}>
          <PodcastItem podcast={podcast} />
        </Suspense>
      )))}
  </div>
}

export default async function Page() {
  const podcasts = await getPodcasts({})
  return <section className="w-full h-screen flex-grow pt-5 pb-8 pl-5 overflow-y-scroll">
    <div className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0">
        Discover:
      </h2>
      
      <PodcastsGrid data={podcasts} />
    </div>
  </section>
}