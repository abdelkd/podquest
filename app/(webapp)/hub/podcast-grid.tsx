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

export default async function PodcastsGrid({}: any) {
  const podcasts = await getPodcasts({})

  return <div className="grid grid-cols-fluid gap-4 auto-cols-min pt-7">
      {podcasts.map((podcast => (
        <Suspense fallback={<PodcastSkeleton />}>
          <PodcastItem podcast={podcast} />
        </Suspense>
      )))}
  </div>
}