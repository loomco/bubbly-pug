import Image from 'next/future/image';
import { motion } from 'framer-motion';

const BehindTheScenes = () => {

    return (
        <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="py-10 px-2 lg:py-14 lg:px-5"
            id="behindTheScenes">
            <div className="px-2 flex flex-col items-center gap-y-5">
                <Image src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                />
                <h2 className="font-normal text-h2 color-[#213841] text-center">Behind the Scenes</h2>
            </div>

            <div className="pt-20 flex flex-col items-center gap-y-20 lg:max-w-6xl lg:mx-auto lg:gap-y-24">
                <article className="bg-[#ebf6fd] flex flex-col lg:flex-row justify-center lg:justify-between items-center max-w-md lg:max-w-[1100px] w-full shadow-md bg-[#d9d9d916] pt-4 px-2 pb-7 lg:py-5 lg:px-10 rounded-lg gap-y-2">
                    <Image src="/images/img-1.png" alt="The Bubbly Pug" height={300} width={300} />
                    <p className="max-w-lg leading-relaxed tracking-snug text-base text-center">
                        Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper.
                    </p>
                </article>

                <article className="bg-[#fabcb466] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center max-w-md lg:max-w-[1100px] w-full shadow-md  pt-4 px-2 pb-7 lg:py-5 lg:px-10 rounded-lg gap-y-2">
                    <p className="max-w-lg leading-relaxed tracking-snug text-base text-center">
                        Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper.
                    </p>
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={300} width={300} />
                </article>
            </div>
        </motion.section>
    )
}

export default BehindTheScenes