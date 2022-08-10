import Head from 'next/head'
// import { MdLocationPin } from 'react-icons/md'
// import HeroSection from '../Components/Hero';
// import Layout from '../Components/Layout';
// import MeetandGreetForm from '../Components/MeetandGreet';
import dynamic from 'next/dynamic'
import { BehindTheScenes, Gallery, Review } from '../components'

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
        {/* <MeetandGreetForm /> */}
      </main>
    </>
  )
}
