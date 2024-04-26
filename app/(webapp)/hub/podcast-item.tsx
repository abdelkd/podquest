'use client'
import Image from 'next/image'

function PodcastItem({ podcast }: any) {
    return <div className="size-32 rounded-lg">
        <Image 
          data-loaded='false'
          onLoad={(e) => {
            e.currentTarget.setAttribute('data-loaded', 'true')
          }}
          className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-300 rounded-lg"
          alt="podcast" 
          height={128} 
          width={128} 
          src={"/api/image?url="+podcast.smallImageURL} 
          />
    </div>
  }
export default PodcastItem