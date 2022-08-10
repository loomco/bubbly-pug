import Head from 'next/head'
// import { MdLocationPin } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { BehindTheScenes, Gallery, MeetAndGreetForm, Review } from '../components'

const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <Head>
        <title>The Bubbly Pug | Home</title>
        <meta type="description" content="" />
      </Head>
      <HeroSection />
      <main>
        <BehindTheScenes />
        <Review content="The Bubbly Pug has so many offerings for my babies and the staff is amazing. I cannot believe what we've been missing." />
        <Gallery />
        <MeetAndGreetForm />
      </main>
    </>
  )
}
