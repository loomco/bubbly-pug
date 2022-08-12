import Head from 'next/head'
// import { MdLocationPin } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { BehindTheScenes, Gallery, MeetAndGreetForm, Review } from '../components'

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
      <main>
        <BehindTheScenes />
        <Review content="The Bubbly Pug has so many offerings for my babies and the staff is amazing. I cannot believe what we've been missing." />
        <Gallery />
        <Review styles={styles} content="I will NEVER use another grooming service. My pups deserve the best and that's what they'll get." />
        <MeetAndGreetForm />
      </main>
    </>
  )
}
