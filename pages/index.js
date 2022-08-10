import Head from 'next/head'
// import { MdLocationPin } from 'react-icons/md'
// import Gallery from '../Components/Gallery';
// import HeroSection from '../Components/Hero';
// import Layout from '../Components/Layout';
// import MeetandGreetForm from '../Components/MeetandGreet';
// import Review from '../Components/Review';
import dynamic from 'next/dynamic'
import { BehindTheScenes } from '../components'

// const HeroSection = dynamic(() => import('../components/Hero'), {
//   ssr: false
// })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Bubbly Pug | Home</title>
        <meta type="description" content="" />
      </Head>
      {/* <HeroSection /> */}
      <main>
        <BehindTheScenes />
        {/* <Review content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quod!" /> */}
        {/* <Gallery /> */}
        {/* <MeetandGreetForm /> */}
      </main>
    </>
  )
}
