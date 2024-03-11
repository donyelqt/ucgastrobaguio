import { Logo, TitleSm, Title } from '@/components/common/Title';
import Services from '@/components/Services'; 
import Banner from '@/components/Banner'; 
import Reviews from '@/components/Reviews';
import Hospitals from '@/components/Hospitals';
import BlogCard from '@/components/BlogCard'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Logo />
          <h1 className='hero-title'><span className="green1 glow2">UC GastroBaguio</span> <span className='glow3'> is an online platform for hospitals based in Baguio City, Philippines, mainly focused on gastroenteritis.</span></h1>
        </div>
      </section>
      <div className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="THE FIRST ONLINE PLATFORM OF UC FOR THE HOSPITALS BASED IN BAGUIO CITY, PHILIPPINES." />
            <p><span className='white'>This platform aims to provide convenient access to medical services and information for the residents of Baguio City. With this online platform, patients can schedule appointments, access their medical records, and even consult with doctors remotely. It also allows hospitals to streamline their operations and improve efficiency in delivering healthcare services.</span></p>
          </div>          
        </div>
      </div>
      <Banner />
      <Services />
      <Hospitals />

      
      <div className='text-center'>
        <Title  title='LATEST NEWS AND HEALTH TIPS.'/>
      </div>
      <BlogCard />
      <Reviews />
    </>
  );
}

export default Hero;

