import Head from 'next/head'
import Banner from '../Commponents/SliderBanner/Banner' 
import Commite from '../Commponents/Commite/Commite' 
import Arrivals from '../Commponents/Arrivals/Arrivals'
import Story from '../Commponents/Story/Story'
import Collection from '../Commponents/Collection/Collection'
import Footer from '../Commponents/Footer/Footer'

export default function Index() {
  return (
   <div>
     
   <Head>
     <Banner />
   </Head>
   <Commite />
   <hr style={{ width: "90%" }} />
   <Arrivals/>
   <Story />
   <Collection />
   <hr style={{ width: "90%" }} />
   <Footer />
   </div>
  )
}
