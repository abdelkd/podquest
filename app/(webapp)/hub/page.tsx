
function PodcastGridItem() {
    return <div className="size-32 bg-gray-300 rounded-lg">

    </div>
}

function PodcastGrid() {
    const arr = Array(99).fill(null).map((_, i) => i+1)
    return <div className="grid grid-cols-fluid gap-4 auto-cols-min pt-7">
        {arr.map(i => <PodcastGridItem key={i} />)}
    </div>
}

export default function Page() {
    return <section className="w-full h-screen flex-grow pt-5 pb-8 pl-5 overflow-y-scroll">
        <div className="">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl  font-semibold tracking-tight first:mt-0">
            Discover:
          </h2>

          <PodcastGrid />
        </div>
    </section>
}