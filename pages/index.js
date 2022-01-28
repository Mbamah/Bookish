import Head from 'next/head'
import {  AboutBook, Book, Cludruns, Footerbanner, Hero, Rules, Testimonial, Works } from '../components';


export default function Home() {
  return (
    <section>
      <Head>
        <title>BooKish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Works/>
      <Book/>
      {/* <Cludruns/> */}
      <Rules/>
      <AboutBook/>
      <Testimonial/>
      <Footerbanner/>
    </section>
  );
}
