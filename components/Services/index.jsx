import React from 'react'
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { Review } from '..'
import { ServicesArray } from './ServiceArray';

const ServicesComp = () => {


    return (
        <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="px-2 lg:px-0 py-36 lg:py-40"
            id="behindTheScenes">
            <div className="flex flex-col items-center px-2 gap-y-1">
                <Image
                    src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                />
                <h2 className="font-normal text-h2 color-[#213841] text-center">Our Bubbly Services</h2>
            </div>

            <div className="mt-10">
                <Review content="I would absolutely recommend The Bubbly Pug to anyone who wants a better alternative to the normal pet grooming experience. Having a membership at TBP is such a treat." />
            </div>

            <div className="grid items-center pt-20 lg:grid-cols-2 justify-items-center xl:grid-cols-3 gap-x-20 gap-y-20 lg:max-w-4xl xl:max-w-6xl lg:mx-auto lg:gap-y-24">
                {
                    ServicesArray.map((service) => (
                        <article key={service.heading} className={`bg-[#ebf6fd] flex flex-col shadow-md bg-[#d9d9d916] rounded-lg gap-y-2 ${service?.specificCSS}`} >
                            <div className=''>
                                <Image
                                    src={service.image}
                                    alt="The Bubbly Pug"
                                    height={service.imageHeight}
                                    width={service.imageWidth}
                                    className="rounded-tl-lg rounded-tr-lg"

                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold">{service.heading}</h3>
                                <p className="max-w-sm text-base leading-relaxed tracking-snug">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </motion.section>
    )
}

export default ServicesComp