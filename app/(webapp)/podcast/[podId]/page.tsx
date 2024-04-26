import Image from 'next/image'
import { getPodcastInfo, getEpisodes } from "@/lib/fyydUtils"


export function Bookmark(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
  

function Episode({ index, title, duration}: any) {
    return <div className="px-3 py-4 flex items-center border-t border-b border-gray-300">
        <p className="font-semibold text-sm">{index}.</p>
        <p className="px-3">{title}</p>
        <p className="ml-auto text-sm text-gray-400">{duration}</p>
    </div>
}

async function PodcastPage({ params }: any) {
    const podId = params.podId
    const podInfo = await getPodcastInfo({ id: podId })
    const ep = await getEpisodes({ id: podId, ep_count: podInfo.stats.episodecount })
    
    return <div className="w-full h-full flex-grow pt-5 pl-5 overflow-hidden flex flex-col">
      <section className="w-full flex-grow pt-5 pb-8 pl-5">
          <div className="flex gap-8">
            <Image
              src={"/api/image?url="+podInfo.imgURL} 
              width={176}
              height={176}
              alt={podInfo.title + " Image"} className="size-44 w-44 shrink-0 rounded-xl" />
  
            <div className="max-w-2xl">
              <div className="flex gap-4 pt-3 items-center">
                <h1 className="text-4xl font-semibold">{podInfo.title} </h1>
                <Bookmark />
              </div>
              <p className="line-clamp-4">{podInfo.description}</p>
            </div>
          </div>
      </section>
      {/* podcast episodes */}
      <section className='w-full h-full overflow-y-scroll grow-1'>
        {/* TODO: optimize it */}
        {ep.episodes.map((ep: any, i: number) => (
            <Episode key={ep.id} index={ep.num_episode} title={ep.title} duration={ep.duration_string} />
        ))}
      </section>
    </div>
}

export default PodcastPage