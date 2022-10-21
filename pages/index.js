import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({exploreData, cardsData}) {

  return (
    <div >
      <Head>
        <title>Daddy Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        {/* Small Card */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data from a server. API endpoints are already made */}
          {/* And we'll do static rendering. In static rendering, it prepares
          it once and caches it on its server and anytime you use the command 
          it just delivers the copy. In server side rendering, for every request
          that takes place, it will regenerate the page, changing the contents 
          such as weather data/news article.*/}
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4'>

            {exploreData?.map(({img,distance,location}) => (//you put parenthesis as it will return jsx
            <SmallCard key={img}
              img={img}
              distance={distance}
              location={location} />
            ))}
          </div>
        </section>

        {/* Medium Card */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-x-scroll scrollbar-hide p-3 ml-3'>
              {cardsData?.map(({img, title})=>(
                <MediumCard key={img}
                  img={img}
                  title={title} />
              ))}  
            </div>
        </section>

        <LargeCard 
        img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440" 
        title="The Greatest Outdoors"
        description="Wishlists created by Airbnb."
        buttonText = "Get Inspired" />
      </main>  
      <Footer /> 
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT"). then
  ((res) => res.json()
  );

  return {
    props:{
      exploreData,
      cardsData, //this returns the data that we got from api to the browser
    },
  };
}
 