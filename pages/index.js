import Head from 'next/head'
// import { MdLocationPin } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { BehindTheScenes, Gallery, MeetAndGreetForm, Review } from '../components'
import Link from 'next/link';

const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false
})

export default function Home() {
  const width = 60;
  const styles = `max-w-5xl`
  return (
    <>
      <Head>
        <title>The Bubbly Pug | Home</title>
        <meta type="description" content="" />
      </Head>

      <HeroSection />
      <div className="flex flex-col items-center py-10">
        <h2 className="text-5xl text-center font-quicksand">Who can relate?</h2>
        <p className="leading-loose max-w-[800px] mx-auto text-center py-3">
          We all love our pups. Unfortunately, the pups we love can get absolutely filthy. Their scary claws clack across the hardwood floor. Their thick fur floats throughout the house. Their smelly smell can get, well, smelly. Not only are these problems unpleasant for us humans, they can be downright unhealthy for our loveable pups. Luckily The Bubbly Pug can help with all of these dirty problems to show your fur babies just how much you love them. A happy and healthy dog makes for an even happier and healthier human.
        </p>
        <Link href="/about"><a className='w-40 px-4 py-2 text-center border btn-gradient'>Read More!</a></Link>
      </div>
      <main>
        {/* <BehindTheScenes /> */}
        <Review content="The Bubbly Pug has so many offerings for my babies and the staff is amazing. I cannot believe what we've been missing." />
        <Gallery />
        <Review styles={styles} content="I will NEVER use another grooming service. My pups deserve the best and that's what they'll get." />
        <MeetAndGreetForm />
      </main>
    </>
  )
}
