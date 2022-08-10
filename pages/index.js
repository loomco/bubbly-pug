import Head from 'next/head'
import Image from 'next/image'
// import { MdLocationPin } from 'react-icons/md'
// import BehindTheScenes from '../Components/BehindTheScenes';
// import Gallery from '../Components/Gallery';
// import HeroSection from '../Components/Hero';
// import Layout from '../Components/Layout';
// import MeetandGreetForm from '../Components/MeetandGreet';
// import Review from '../Components/Review';
import dynamic from 'next/dynamic'


const HeroSection = dynamic(() => import('../components/hero'), {
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
        {/* <BehindTheScenes /> */}
        {/* <Review content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quod!" /> */}
        {/* <Gallery /> */}
        {/* <MeetandGreetForm /> */}
      </main>
    </>
  )
}
