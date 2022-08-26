import React from 'react'
import Image from 'next/future/image'
import { GalleryArray } from './GalleryArray'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation, Keyboard } from "swiper";

const Gallery = () => {
    return (
        <div className="flex flex-col items-center p-10">
            <h2 className="text-h2 font-quicksand">Gallery</h2>
            <div className="py-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Keyboard]}
                    className="mySwiper"
                >
                    {
                        GalleryArray.map((image) => (
                            <SwiperSlide key={image.img}> <Image src={image.img} height={250} width={250} /></SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Gallery