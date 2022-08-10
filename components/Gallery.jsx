import React from 'react'
import Image from 'next/future/image'

const Gallery = () => {
    return (
        <div className="p-10 flex flex-col items-center">
            <h2 className="text-h2">Gallery</h2>
            <div className="pt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
                <Image src="/images/img-1.png" height={250} width={250} />
                <Image src="/images/img-2.png" height={250} width={250} />
                <Image src="/images/img-3.png" height={250} width={250} />
                <Image src="/images/img-3.png" height={250} width={250} />
                <Image src="/images/img-2.png" height={250} width={250} />
                <Image src="/images/img-1.png" height={250} width={250} />
                <Image src="/images/img-1.png" height={250} width={250} />
                <Image src="/images/img-3.png" height={250} width={250} />
                <Image src="/images/img-2.png" height={250} width={250} />
            </div>
        </div>
    )
}

export default Gallery