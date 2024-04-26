import { unstable_noStore as noStore } from 'next/cache';

const endpoint = "https://api.fyyd.de/0.2"

type APIItem = {
    title: string,
    id: string,
    xmlURL: string,
    htmlURL: string,
    imgURL: string,
    status: number,
    status_since: string,
    slug: string,
    layoutImageURL: string,
    thumbImageURL: string,
    smallImageURL: string,
    microImageURL: string,
    language: string,
    generator: string,
    categories: number[],
    lastpub: string,
    rank: number,
    url_fyyd: string,
    description: string,
    subtitle: string,
    tcolor: string,
    color: string,
    episode_count: number,
    iflags: string,
    payment_URL: string,
    author: string,
    stats: {
        medianduration: number,
        medianduration_string: string,
        episodecount: number,
        pubinterval_seconds: 604800,
        pubinterval: 7,
        complete_duration_value: 1888271,
        pubinterval_string: 'wöchentlich',
        pubinterval_value: 7,
        pubinterval_type: 2,      
    },
}

type APIResponse = {
    data: APIItem[]
}
interface GetPodcasts {
    count?: number
}
export const getPodcasts = async ({ count = 50 }: GetPodcasts): Promise<APIResponse['data']> => {
    noStore()
    const res = await fetch(`${endpoint}/podcasts?count=10`, {cache: 'no-store'})
    const json = await res.json()

    return json.data
}