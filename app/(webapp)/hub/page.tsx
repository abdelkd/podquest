import { Suspense } from 'react'
import Image from 'next/image'

import PodcastsGrid from './podcast-grid'



export default async function Page() {
  return <section className="w-full h-screen flex-grow pt-5 pb-8 pl-5 overflow-y-scroll">
    <div className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0">
        Discover:
      </h2>
      <Suspense fallback={<p>loading...</p>}>
        <PodcastsGrid />
      </Suspense>
    </div>
  </section>
}