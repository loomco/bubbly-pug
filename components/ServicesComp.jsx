import React from 'react'
import Image from 'next/future/image';
import { motion } from 'framer-motion';
import { Review } from '.'

const ServicesComp = () => {
    return (
        <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="py-36 px-2 lg:py-40 lg:px-5"
            id="behindTheScenes">
            <div className="px-2 flex flex-col items-center gap-y-1">
                <Image src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                />
                <h2 className="font-normal text-h2 color-[#213841] text-center">Our Bubbly Services</h2>
            </div>

            <div className="mt-10">
                <Review content="I would absolutely recommend The Bubbly Pug to anyone who wants a better alternative to the normal pet grooming experience. Having a membership at TBP is such a treat." />
            </div>

            <div className="pt-20 grid lg:grid-cols-2 justify-items-center  xl:grid-cols-3 items-center gap-x-10 gap-y-20 lg:max-w-4xl xl:max-w-6xl lg:mx-auto lg:gap-y-24">
                <article className="bg-[#ebf6fd] w-[350px] flex flex-col items-center shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 rounded-lg gap-y-2 lg:min-h-[375px]">
                    <Image src="/images/img-1.png" alt="The Bubbly Pug" height={250} width={250} />
                    <h3 className="font-bold text-lg">Wash, Brush & Blow Dry</h3>
                    <p className="max-w-sm leading-relaxed tracking-snug text-base text-center">
                        Basic (but thorough) bathing service ending with a brush out & a blow dry. Can add additional services!
                    </p>
                </article>

                <article className="bg-[#ebf6fd] w-[350px] flex flex-col items-center   shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 rounded-lg gap-y-2 lg:min-h-[375px]">
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={250} width={250} />
                    <h3 className="font-bold text-lg">Skin Treatments</h3>
                    <p className="max-w-sm leading-relaxed tracking-snug text-base text-center">
                        basic sensitive skin treatments. More advanced allergies will be referred to a dermatological veterinarian.
                    </p>
                </article>

                <article className="bg-[#ebf6fd] w-[350px] flex flex-col items-center   shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 rounded-lg gap-y-2 lg:min-h-[375px]">
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={250} width={250} />
                    <h3 className="font-bold text-lg">Tooth Brushing</h3>
                    <p className=" leading-relaxed tracking-snug text-base text-center">
                        Tooth brushing with pet friendly toothpaste and brush.
                    </p>
                </article>

                <article className="bg-[#ebf6fd] w-[350px] flex flex-col items-center   shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 rounded-lg gap-y-2 lg:min-h-[375px]">
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={250} width={250} />
                    <h3 className="font-bold text-lg">Claw Grind</h3>
                    <p className="max-w-sm leading-relaxed tracking-snug text-base text-center">
                        Claw trim and rounded grind.
                    </p>
                </article>

                <article className="bg-[#ebf6fd] w-[350px] flex flex-col items-center   shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 rounded-lg gap-y-2 lg:min-h-[375px]">
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={250} width={250} />
                    <h3 className="font-bold text-lg">Haircut/Trim</h3>
                    <p className="max-w-sm leading-relaxed tracking-snug text-base text-center">
                        Fur trim or haircut in any style you like!
                    </p>
                </article>



                <article className="bg-[#ebf6fd] w-[350px] flex flex-col items-center   shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 rounded-lg gap-y-2 lg:min-h-[375px]">
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={250} width={250} />
                    <h3 className="font-bold text-lg">Gland Expression</h3>
                    <p className="max-w-sm leading-relaxed tracking-snug text-base text-center">
                        Glands are expressed to ensure your pups stay healthy.
                    </p>
                </article>


            </div>
        </motion.section>
    )
}

export default ServicesComp