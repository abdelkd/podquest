import { type NextRequest, NextResponse } from 'next/server'

type Params = {
    params: {
        url: string
    }
}

export const dynamic = 'force-dynamic'
export const GET = async (req: Request, { params }: Params) => {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get('url');
    console.log('found url', url)
    if (!url) {
        return new NextResponse('Image not found.', {
            status: 404,
        })
    }

    try {
        const splitUrl = url.split('.')
        const lastIdx = splitUrl.length - 1
        let imageType = splitUrl.splice(lastIdx)[0]
        if (!imageType) {
            imageType = 'png'
        }

        const res = await fetch(url, {
            headers: {
                'Content-Type': `image/${imageType}`
            }
        })
        if (!res.ok || res.body === null) {
            throw new Error('Failed to load')
        }

        const data = res.body
        
        return new NextResponse(data, {
            headers: {
                'Content-Type': `image/${imageType}`,
            }
        })
    } catch (e) {
        return new NextResponse('Internal Server Error.', {
            status: 501,
        })
    }
}